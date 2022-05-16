import "./products.css"
import { DataGrid, GridRowsProp, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Link } from "react-router-dom";

const rows: GridRowsProp = [
  { id: 1, product: "https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png", name: 'Addidas Bag', price: '$105', avalibility: 'Available', stock_count: '8' },
  { id: 1, product: "https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png", name: 'Addidas Bag', price: '$105', avalibility: 'Available', stock_count: '8' },
  { id: 1, product: "https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png", name: 'Addidas Bag', price: '$105', avalibility: 'Available', stock_count: '8' },
  { id: 1, product: "https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png", name: 'Addidas Bag', price: '$105', avalibility: 'Available', stock_count: '8' },
  { id: 1, product: "https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png", name: 'Addidas Bag', price: '$105', avalibility: 'Available', stock_count: '8' },
  { id: 1, product: "https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png", name: 'Addidas Bag', price: '$105', avalibility: 'Available', stock_count: '8' },
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100, flex:0.5 },
  {field: 'product', headerName: 'Product', width: 120, flex:1, renderCell: (params) => {
      return (<img className="new-product-image" src={params.row.product} alt="" />
      )}
  },
  { field: 'name', headerName: 'Name', width: 120,flex:1 },
  { field: 'price', headerName: 'Price', width: 120, flex:1 },
  { field: 'avalibility', headerName: 'Avalibility', width: 120,flex:1 },
  { field: 'stock_count', headerName: 'Stock Count', width: 120, flex:1 },
  {field: 'actions', headerName: 'Actions', width: 200, flex:1,  renderCell: (params) => {
    return (
    <>
        <Link to={`/product/${params.row.id}`}><button className="product-view-button">VIEW</button></Link>
        <button className="product-delete-button">DELETE</button>
    </>
)
} },
];

const Products = () => {
  return (
    <div className="all-products-container">
      <div className="all-products-table">
        <DataGrid
            rows={rows}
            columns={columns}
            pageSize={25}
            checkboxSelection={false}
            disableSelectionOnClick
        />
      </div>
    </div>
  )
}

export default Products