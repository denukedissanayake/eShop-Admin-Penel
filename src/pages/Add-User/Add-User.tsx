import Alert from "@mui/material/Alert";
import { useState } from "react"
import { useAuth } from "../../Context/AuthContext";
import "./add-user.css"
import { addNewUser as addNewuser } from "./data/add-user";

const AddUser = () => {
  const [newUser, setNewUser] = useState<any>(undefined);
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const addNewUser = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    setIsLoading(true)

    const { data, error } = await addNewuser(newUser, user?.accesToken);
  
    setIsLoading(false)
    if (error) {
      setIsError(true)
      setTimeout(() => setIsError(false), 3000)
      return;
    } 
    if (!error && data) {
      setIsSuccess(true)
      setNewUser(undefined)
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }
  }

  return (
    <div className="add-user-container">
      <span className="add-user-container-label">ADD USER</span>
      <form className="add-user-form">
        <div className="add-user-item">
          <label className="add-user-item-label">Username</label>
          <input
            className="add-user-item-input"
            type="text"
            placeholder="Enter Username"
            value={newUser?.username || ""}
            onChange={(e: any) => {
              setNewUser({ ...newUser, username: e.target.value })
            }}
          />
        </div>
        <div className="add-user-item">
          <label className="add-user-item-label">Name</label>
          <input
            className="add-user-item-input"
            type="text"
            placeholder="Frist Name Last name"
            value={newUser?.name || ""}
            onChange={(e: any) => {
              setNewUser({ ...newUser, name: e.target.value })
            }}
          />
        </div>
        <div className="add-user-item">
          <label className="add-user-item-label">Email</label>
          <input
            className="add-user-item-input"
            type="email"
            placeholder="Enter email"
            value={newUser?.email || ""}
            onChange={(e: any) => {
              setNewUser({ ...newUser, email: e.target.value })
            }}
          />
        </div>
        <div className="add-user-item">
          <label className="add-user-item-label">Password</label>
          <input
            className="add-user-item-input"
            type="password"
            placeholder="Enter password"
            value={newUser?.password || ""}
            onChange={(e: any) => {
              setNewUser({ ...newUser, password: e.target.value })
            }}
          />
        </div>
        <div className="add-user-item">
          <label className="add-user-item-label">Contact Details</label>
          <input
            className="add-user-item-input"
            type="text"
            placeholder="Enter Contact Details"
            value={newUser?.contactdetails || ""}
            onChange={(e: any) => {
              setNewUser({ ...newUser, contactdetails: e.target.value })
            }}
          />
        </div>
        <div className="add-user-item">
          <label className="add-user-item-label">Location</label>
          <input
            className="add-user-item-input"
            type="text"
            placeholder="Add Location EX: Colombo-SriLanka"
            value={newUser?.location || ""}
            onChange={(e: any) => {
              setNewUser({ ...newUser, location: e.target.value })
            }}
          />
        </div>
        <div className="add-user-item-radio-button">
          <label className="add-user-item-role-label">Role</label>
          <div className="add-user-item-role-wrapper">
            <input
              type="radio"
              name="role"
              value="Admin"
              checked={newUser?.role === 'admin' || false}
              onChange={(e: any) => {
                setNewUser({ ...newUser, role: e.target.value })
              }}
            />
            <span>Admin</span>
            <input
              type="radio"
              name="role"
              value="Moderator"
              checked={newUser?.role === 'moderator' || false}
              onChange={(e: any) => {
                setNewUser({ ...newUser, role: e.target.value })
              }}
            />
            <span>Moderator</span>
          </div>
        </div>
        <div className="user-added-info-alerts">
          {isError && <Alert severity="error">User Adding Failed. Please Try Again!</Alert>}
          {isSuccess &&  <Alert severity="success">User added Succesfully!</Alert>}
        </div>
        <div className="add-user-item-button-wrapper">
          <button
            className="add-user-item-button"
            disabled={isLoading || !newUser || !newUser?.name || !newUser?.username || !newUser?.email || !newUser?.password || !newUser?.role}
            onClick={addNewUser}
          >
            {isLoading ? "ADDING USER..." :"ADD USER"}
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddUser