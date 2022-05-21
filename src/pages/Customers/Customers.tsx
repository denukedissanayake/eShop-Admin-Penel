import "./customers.css"
import { DataGrid, GridRowsProp, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getRecentCustomers } from './data/get-all-customers'
import { useEffect, useState } from "react";
import { useAuth } from "../../Context/AuthContext";

const rows: GridRowsProp = [
    { id: 1, user: "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=", firstName: 'Snow', lastName: 'Jon', username: 'johndd', email: 'Jon@gmail.com', status: 'active', transactions: "$1000" },
    { id: 2, user: "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=",  firstName: 'Snow', lastName: 'Jon', username: 'johndd', email: 'Jon@gmail.com', status: 'active', transactions: "$1000" },
  ];

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

    useEffect(() => {
        const fetchRecentCustomers = async () => {
            const { data } = await getRecentCustomers(user?.accesToken)
            setRecentCustomers(data);
        }
        fetchRecentCustomers();
    }, [])
    
    console.log(recentCustomers)

  return (
      <div className="user-page-container">
            <div className="user-container">
              <span className="new-user-title">Yeahh!!! New Customers (Last 24H)</span>
              {recentCustomers ?
                  <table className="new-user-table">
                    <tbody>
                        {recentCustomers.map((customer : any) => (
                          <tr className="new-user-table-item" key={customer._id}>
                                <td><img className="new-user-image" src={customer.photo || "https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8="} alt="" /></td>
                              <td className="new-user-name">{`${customer.firstname} ${customer.lastname}`}</td>
                                <td className="new-user-username">{customer.username}</td>
                                <td className="new-user-email">{customer.email}</td>
                                <td><button className="new-user-view-button">View</button></td>
                            </tr>
                        ))}
                    </tbody>
                  </table> : <span>No New Customers in Last 24 Hours</span>}
            </div>
            <div className="all-user-table-container">
                <div className="all-user-table">
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={25}
                        checkboxSelection={false}
                        disableSelectionOnClick
                    />
                </div>
            </div>
    </div>
  )
}

export default Customers