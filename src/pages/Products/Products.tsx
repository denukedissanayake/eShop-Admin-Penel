import "./products.css"
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { getAllProducts } from "./data/get-all-products";
import { useAuth } from "../../Context/AuthContext";
import { useEffect, useState } from "react";
import { DUMMY_PRODUCT_IMAGE } from "../../utils/additional-data";

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
  const { user } = useAuth()
  const [products, setProducts] = useState<any>()

  const fetchAllProducts = async () => {
    const allProducts :any[] = []
    const { data } = await getAllProducts(user?.accesToken)

    data && data.forEach((prod : any)=> {
      allProducts.push({
        id: prod._id,
        product: prod.image || DUMMY_PRODUCT_IMAGE,
        name: prod.name,
        price: prod.price,
        avalibility: prod.isAvailable ? "Available" : "Not-Available",
        stock_count: prod.stock || "-"
      })
    });

    setProducts(allProducts);
  }

  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    <div className="all-products-container">
      <div className="all-products-table">
        {products && <DataGrid
          rows={products}
          columns={columns}
          pageSize={25}
          checkboxSelection={false}
          disableSelectionOnClick
        />}
      </div>
    </div>
  )
}

export default Products