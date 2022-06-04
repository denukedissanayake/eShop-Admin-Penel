import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import { getAllOrders } from "./data/get-orders";
import "./transactions.css"

const Transactions = () => {
  const { user } = useAuth()
  const [orders, setOrders] = useState<any>();

  const fetchOrders = async () => {
    const { data } = await getAllOrders(user?.accesToken)
    setOrders(data);
  }

  useEffect(() => {
    fetchOrders();
  }, [])

  console.log(orders)
  
  return (
      <div className="transaction-page-container">
          <div className="latest-transactions-container">
              <span className="latest-transactions-title">Wow!!! More Transactions</span>
              {orders ? 
              <table className="latest-transactions-table">
                <tbody>
                  {orders && orders.map((order: any) => (
                    <tr key={order._id}>
                      <td className="latest-transactions-table-date">{order.createdAt.split("T")[0]}</td>
                      <td className="latest-transactions-table-date">{order.products.map((product: any) => (
                        product.productName + " "
                      ))}</td>
                      <td className="latest-transactions-table-amount">$ {order.amount / 100.00}</td>
                      <td><span className={`latest-transactions-table-status pending`} >{order.status}</span></td>
                      <td><button className="order-view-button">View Order</button></td>
                    </tr> 
                  ))}
                </tbody>
              </table>: <h1>No any orders YET!!!</h1> }
          </div>
    </div>
  )
}

export default Transactions