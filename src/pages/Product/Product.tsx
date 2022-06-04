import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"
import { useAuth } from "../../Context/AuthContext";
import { DUMMY_PRODUCT_IMAGE } from "../../utils/additional-data";
import { getProductById } from "./data/get-product-by-id";
import "./product.css"

const Product = () => {
  const location = useLocation();
  const { user } = useAuth()
  const [productDetails, setProductDetails] = useState<any>()
  const [isLoading, setIsLoading] = useState(false)
  const [photo, setPhoto] =useState<File | undefined>(undefined) 

  const productId = location.pathname.split("/")[2];

  const fetchProdutById = async () => {
    setIsLoading(true)
    const { data } = await getProductById(user?.accesToken, productId)
    setProductDetails(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchProdutById()
  }, [])

  return (
    <div className="product-page-container">
      {isLoading ? <h1>Loading...</h1> : 
        <>
          <h2 className="product-page-container-title">{`${productDetails?.name} - ${productDetails?.brand}`}</h2><div className="product-page-items">

          <div className="product-page-item-details">
            <div className="product-details-header">
              <img className="product-details-header-image" src={productDetails?.image || DUMMY_PRODUCT_IMAGE}  alt="" />
              <span className="product-details-header-name">{`${productDetails?.name} - ${productDetails?.brand}`}</span>
            </div>
            <span className="product-details-title">Product Details</span>
            <div className="product-details-item">
              <span><b>Product Name:</b></span>
              <span className="product-details-item-name">{`${productDetails?.name}`}</span>
            </div>
            <div className="product-details-item">
              <span><b>Brand Name:</b></span>
              <span className="product-details-item-name">{`${productDetails?.brand}`}</span>
            </div>
            <div className="product-details-item">
              <span><b>Description:</b></span>
              <span className="product-details-item-name">{`${productDetails?.description}`}</span>
            </div>
            <div className="product-details-item">
              <span><b>Availability:</b></span>
              <span className="product-details-item-name">{productDetails?.isAvailable ? "Available" : "Not-Available"}</span>
            </div>
            <div className="product-details-item">
              <span><b>Colors:</b></span>
                {productDetails?.color.map((c :string) => (
                  <span key={c} className="product-details-item-name">{c}</span>
              ))}
            </div>
            <div className="product-details-item">
              <span><b>Sizes:</b></span>
              {productDetails?.size.map((s :string) => (
                  <span key={s} className="product-details-item-name">{s}</span>
              ))}
            </div>
          </div>

          <div className="product-page-items-edit">
            <span className="edit-product-details-title">EDIT DETAILS</span>
            <form className="edit-product-details-items-form">
              <div className="edit-product-details-items-container-wrapper">
                <div className="edit-product-details-items-container">
                  <div className="edit-product-details-item">
                    <label className="edit-product-details-item-label">Product Name</label>
                    <input className="edit-product-details-item-input" defaultValue={productDetails?.name} placeholder="Enter Product Name" type="text" />
                  </div>
                  <div className="edit-product-details-item">
                    <label className="edit-product-details-item-label">Product Brand</label>
                    <input className="edit-product-details-item-input" defaultValue={productDetails?.brand} placeholder="Enter Product Brand" type="text" />
                  </div>
                  <div className="edit-product-details-item">
                    <label className="edit-product-details-item-label">Product Description</label>
                    <textarea className="edit-product-details-item-input" defaultValue={productDetails?.description} placeholder="Enter Product Name" />
                  </div>
                </div>
                <div>
                  <div className="edit-product-details-image-wrapper">
                    <img alt="" className="edit-product-details-image" defaultValue={productDetails?.image} src={photo ? URL.createObjectURL(photo) : productDetails?.image} />
                    {!photo &&
                      <>
                        <label htmlFor="file">Upload Image</label>
                        <input id="file" type="file" style={{ display: "none" }} onChange={(e: any) => setPhoto(e.target.files[0])} />
                      </>}
                    {photo &&  
                      <>
                        <label onClick={() => setPhoto(undefined)}>Remove Image</label>
                      </>
                    }
                  </div>
                </div>
              </div>

              <div className="add-product-item-selection-buttons">
                <div className="add-product-item-radio-button">
                  <label className="add-product-item-availability-label">Availablity</label>
                  <div className="add-product-item-availability-wrapper">
                    <span><input type="radio" name="availability" value="Available" />Available</span>
                    <span><input type="radio" name="availability" value="Not-Available" />Not-Available</span>
                  </div>
                </div>
                <div className="add-product-item-check-box">
                  <label className="add-product-item-size-label">Sizes</label>
                  <div className="add-product-item-size-wrapper">
                    <span><input type="checkbox" name="size" value="Extra Small" />Extra Small</span>
                    <span><input type="checkbox" name="size" value="Small" />Small</span>
                    <span><input type="checkbox" name="size" value="Medium" />Medium</span>
                    <span><input type="checkbox" name="size" value="Large" />Large</span>
                    <span><input type="checkbox" name="size" value="Extra Large" />Extra Large</span>
                  </div>
                </div>
                <div className="add-product-item-check-box">
                  <label className="add-product-item-color-label">Colors</label>
                  <div className="add-product-item-color-wrapper">
                    <span><input type="checkbox" name="color" value="Black" />Black</span>
                    <span><input type="checkbox" name="color" value="White" />White</span>
                    <span><input type="checkbox" name="color" value="Blue" />Blue</span>
                    <span><input type="checkbox" name="color" value="Gray" />Gray</span>
                    <span><input type="checkbox" name="color" value="Red" />Red</span>
                    <span><input type="checkbox" name="color" value="Other" />Other</span>
                  </div>
                </div>
                <div className="add-product-item-check-box">
                  <label className="add-product-item-category-label">Categories</label>
                  <div className="add-product-item-category-wrapper">
                    <span><input type="checkbox" name="category" value="Men" />Men</span>
                    <span><input type="checkbox" name="category" value="Women" />Women</span>
                    <span><input type="checkbox" name="category" value="Kids" />Kids</span>
                    <span><input type="checkbox" name="category" value="Office-Ware" />Office Ware</span>
                    <span><input type="checkbox" name="category" value="Casual-Ware" />Casual Ware</span>
                    <span><input type="checkbox" name="category" value="Shoes" />Shoes</span>
                    <span><input type="checkbox" name="category" value="Underwares" />Underwares</span>
                    <span><input type="checkbox" name="category" value="Underwares" />Underwares</span>
                    <span><input type="checkbox" name="category" value="Warebles" />Warebles</span>
                    <span><input type="checkbox" name="category" value="Other" />Other</span>
                  </div>
                </div>
              </div>

              <div className="edit-product-details-save-button-wrapper">
                <button className="edit-product-details-save">UPDATE</button>
              </div>
            </form>
          </div>
          </div>
        </>
      }
    </div>
  )
}

export default Product