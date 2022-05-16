import "./add-product.css"

const AddProduct = () => {
  return (
    <div className="add-product-container">
      <span className="add-product-container-label">ADD PRODUCT</span>
      <form className="add-product-form">
        <div className="add-product-item">
          <label className="add-product-item-label">Product Name</label>
          <input className="add-product-item-input" type="text" placeholder="Enter Product Name" />
        </div>
        <div className="add-product-item">
          <label className="add-product-item-label">Product Brand</label>
          <input className="add-product-item-input" type="text" placeholder="Enter Product Brand Name" />
        </div>
        <div className="add-product-item description">
          <label className="add-product-item-label">Product Description</label>
          <input className="add-product-item-input" type="text" placeholder="Enter Product Description" />
        </div>
        <div className="add-product-item-selection-wrapper">
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
          <div className="add-product-item-selection-image">
            <div className="add-product-item-selection-image-wrapper">
              <img alt="" className="edit-profile-details-image" src="https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png" />
              <label htmlFor="file">Upload Image</label>
              <input id="file" type="file" style={{ display: "none" }} />
              </div>
          </div>
        </div>
        <div className="add-product-item-button-wrapper">
          <button className="add-product-item-button">ADD PRODUCT</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct