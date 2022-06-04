import { useEffect, useState } from "react"
import { useAuth } from "../../Context/AuthContext"
import { DUMMY_USER_IMAGE } from "../../utils/additional-data"
import { getAdminUsers } from "./data/get-admin-users"
import "./users.css"

const Users = () => {
  const [adminUsers, setAdminUsers] = useState<any>()
  const {user} = useAuth()

  const fetchAdminUsers = async () => {
    const { data } = await getAdminUsers(user?.accesToken)
    setAdminUsers(data);
  }

  useEffect(() => {
    fetchAdminUsers();
  }, [])

  return (
    <div className="users-page-container">
        <div className="user-container">
            <span className="user-title">Admin Users</span>
            {adminUsers &&
              <table className="admin-user-table">
                <tbody>
                  {adminUsers && adminUsers.map((user: any) => (
                    <tr className="admin-user-table-row" key={user._id}>
                      <td className="admin-user-table-id">1</td>
                      <td className="admin-user-table-user">
                        <img className="admin-user-table-customer-image" src={user.photo || DUMMY_USER_IMAGE} ></img>
                        <span className="admin-user-table-name">{user.name}</span>
                      </td>
                      <td className="admin-user-table-username">{user.username}</td>
                      <td className="admin-user-table-email">{user.email}</td>
                      <td className="admin-user-table-role">{user.role}</td>
                      <td className="admin-user-table-actions">
                        <button className="admin-user-table-actions-button view">VIEW</button>
                        <button className="admin-user-table-actions-button edit">EDIT</button>
                        <button className="admin-user-table-actions-button delete">DELETE</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>}
        </div>
    </div>
  )
}

export default Users