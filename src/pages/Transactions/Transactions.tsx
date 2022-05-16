import "./transactions.css"

const Transactions = () => {
  return (
      <div className="transaction-page-container">
          <div className="latest-transactions-container">
              <span className="latest-transactions-title">Wow!!! More Transactions</span>
              <table className="latest-transactions-table">
                  <tr className="latest-transactions-table-row">
                    <th className="latest-transactions-table-header">Customer</th>
                    <th className="latest-transactions-table-header">Date</th>
                    <th className="latest-transactions-table-header">Items</th>
                    <th className="latest-transactions-table-header">Amount</th>
                    <th className="latest-transactions-table-header">Status</th>
                </tr>
                <tr>
                    <td className="latest-transactions-table-customer">
                       <img className="latest-transactions-table-customer-image" src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" ></img>   
                       <span className="latest-transactions-table-customer-name">John Snow</span>
                    </td>  
                      <td className="latest-transactions-table-date">2022/05/01</td>
                      <td className="latest-transactions-table-date">Addidas Shoe, Office Bag</td>
                      <td className="latest-transactions-table-amount">$ 25</td>
                      <td>
                          <span className={`latest-transactions-table-status pending`} >Pending</span>
                      </td>
                  </tr>
                  <tr>
                    <td className="latest-transactions-table-customer">
                       <img className="latest-transactions-table-customer-image" src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" ></img>   
                       <span className="latest-transactions-table-customer-name">John Snow</span>
                    </td>  
                      <td className="latest-transactions-table-date">2022/05/01</td>
                      <td className="latest-transactions-table-date">Addidas Shoe, Office Bag</td>
                      <td className="latest-transactions-table-amount">$ 25</td>
                      <td>
                          <span className={`latest-transactions-table-status pending`} >Pending</span>
                      </td>
                  </tr>
                  <tr>
                    <td className="latest-transactions-table-customer">
                       <img className="latest-transactions-table-customer-image" src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" ></img>   
                       <span className="latest-transactions-table-customer-name">John Snow</span>
                    </td>  
                      <td className="latest-transactions-table-date">2022/05/01</td>
                      <td className="latest-transactions-table-date">Addidas Shoe, Office Bag</td>
                      <td className="latest-transactions-table-amount">$ 25</td>
                      <td>
                          <span className={`latest-transactions-table-status pending`} >Pending</span>
                      </td>
                  </tr>
              </table>
          </div>
    </div>
  )
}

export default Transactions