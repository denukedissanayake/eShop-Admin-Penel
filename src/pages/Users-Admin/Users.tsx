import "./users.css"

const Users = () => {
  return (
    <div className="users-page-container">
        <div className="user-container">
            <span className="user-title">Admin Users</span>
              <table className="admin-user-table">
                <tr className="admin-user-table-row">
                    <td className="admin-user-table-id">1</td>
                    <td className="admin-user-table-user">
                       <img className="admin-user-table-customer-image" src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" ></img>   
                       <span className="admin-user-table-name">John Snow</span>
                    </td>  
                    <td className="admin-user-table-username">johns</td>
                    <td className="admin-user-table-email">johns@xyz.com</td>
                    <td className="admin-user-table-role">Admin</td>
                    <td className="admin-user-table-actions">
                        <button className="admin-user-table-actions-button view">VIEW</button>
                        <button className="admin-user-table-actions-button delete">DELETE</button>
                    </td>
                  </tr>
                  <tr className="admin-user-table-row">
                    <td className="admin-user-table-id">1</td>
                    <td className="admin-user-table-user">
                       <img className="admin-user-table-customer-image" src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" ></img>   
                       <span className="admin-user-table-name">John Snow</span>
                    </td>  
                    <td className="admin-user-table-username">johns</td>
                    <td className="admin-user-table-email">johns@xyz.com</td>
                    <td className="admin-user-table-role">Admin</td>
                    <td className="admin-user-table-actions">
                        <button className="admin-user-table-actions-button view">VIEW</button>
                        <button className="admin-user-table-actions-button delete">DELETE</button>
                    </td>
                  </tr>
              </table>
        </div>
    </div>
  )
}

export default Users