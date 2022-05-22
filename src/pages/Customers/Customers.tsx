import "./customers.css"
import { DataGrid, GridRowsProp, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getRecentCustomers } from './data/get-recent-customers'
import { getAllCustomers } from "./data/get-all-customers";
import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import {DUMMY_USER_IMAGE} from "../../utils/additional-data"

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 , flex:0.25 },
    {field: 'user', headerName: 'User', width: 120 , flex:0.5 , renderCell: (params) => {
        return (<img className="new-user-image" src={params.row.user} alt="" />
        )}
    },
    { field: 'firstName', headerName: 'First name', width: 120, flex:1 },
    { field: 'lastName', headerName: 'Last name', width: 120, flex:1 },
    { field: 'username', headerName: 'Username', width: 120, flex:1 },
    { field: 'email', headerName: 'Email', width: 120, flex:1 },
    { field: 'status', headerName: 'Status', width: 120 , flex:0.5},
    { field: 'transactions', headerName: 'Transactions', width: 120, flex:1 },
    {field: 'actions', headerName: 'Actions', width: 200, flex:1, renderCell: (params) => {
            return (
            <>
                <button className="user-list-view-button">VIEW</button>
                <button className="user-list-delete-button">DELETE</button>
            </>
        )
    } },
  ];

const Customers = () => {
  const { user } = useAuth()
  const [recentCustomers, setRecentCustomers] = useState<any>()
  const [allCustomers, setAllCustomers] = useState<any>()
    
  const fetchRecentCustomers = async () => {
    const { data } = await getRecentCustomers(user?.accesToken)
    setRecentCustomers(data);
  }
  
  const fetchAllCustomers = async () => {
    const allCustomers :any[] = []
    const { data } = await getAllCustomers(user?.accesToken)

    data && data.forEach((customer :any) => {
      allCustomers.push({
        id: customer._id,
        user: customer.photo || DUMMY_USER_IMAGE,
        firstName: customer.firstname,
        lastName: customer.lastname,
        username: customer.username,
        email: customer.email,
        status: customer.status || "-",
        transactions : customer.transactions || "-"
      })
    });
    setAllCustomers(allCustomers);
  }

  useEffect(() => {
    fetchRecentCustomers();
    fetchAllCustomers();
  }, [])

  console.log(allCustomers)

  return (
      <div className="user-page-container">
            <div className="user-container">
              <span className="new-user-title">Yeahh!!! New Customers (Last 24H)</span>
              {recentCustomers ?
                  <table className="new-user-table">
                    <tbody>
                        {recentCustomers && recentCustomers.map((customer : any) => (
                          <tr className="new-user-table-item" key={customer._id}>
                                <td><img className="new-user-image" src={customer.photo || DUMMY_USER_IMAGE} alt="" /></td>
                              <td className="new-user-name">{`${customer.firstname} ${customer.lastname}`}</td>
                                <td className="new-user-username">{customer.username}</td>
                                <td className="new-user-email">{customer.email}</td>
                                <td><button className="new-user-view-button">View</button></td>
                            </tr>
                        ))}
                    </tbody>
                  </table> : <h1>No New Customers in Last 24 Hours</h1>}
            </div>
            <div className="all-user-table-container">
                <div className="all-user-table">
                    {allCustomers && <DataGrid
                        rows={allCustomers}
                        columns={columns}
                        pageSize={25}
                        checkboxSelection={false}
                        disableSelectionOnClick
                    />}
                </div>
            </div>
    </div>
  )
}

export default Customers