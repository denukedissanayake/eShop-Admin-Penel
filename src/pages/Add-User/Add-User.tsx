import "./add-user.css"

const AddUser = () => {
  return (
    <div className="add-user-container">
      <span className="add-user-container-label">ADD USER</span>
      <form className="add-user-form">
        <div className="add-user-item">
          <label className="add-user-item-label">Username</label>
          <input className="add-user-item-input" type="text" placeholder="Enter Username" />
        </div>
        <div className="add-user-item">
          <label className="add-user-item-label">Name</label>
          <input className="add-user-item-input" type="text" placeholder="Frist Name Last name" />
        </div>
        <div className="add-user-item">
          <label className="add-user-item-label">Email</label>
          <input className="add-user-item-input" type="email" placeholder="Enter email" />
        </div>
        <div className="add-user-item">
          <label className="add-user-item-label">Password</label>
          <input className="add-user-item-input" type="password" placeholder="Enter password" />
        </div>
        <div className="add-user-item">
          <label className="add-user-item-label">Contact Details</label>
          <input className="add-user-item-input" type="text" placeholder="Enter Contact Details" />
        </div>
        <div className="add-user-item">
          <label className="add-user-item-label">Location</label>
          <input className="add-user-item-input" type="text" placeholder="Add Location EX: Colombo-SriLanka" />
        </div>
        <div className="add-user-item-radio-button">
          <label className="add-user-item-role-label">Role</label>
          <div className="add-user-item-role-wrapper">
            <input type="radio" name="role" value="admin" /><span>Admin</span>
            <input type="radio" name="role" value="moderator" /><span>Moderator</span>
          </div>
        </div>
        <div className="add-user-item-button-wrapper">
          <button className="add-user-item-button">ADD USER</button>
        </div>
      </form>
    </div>
  )
}

export default AddUser