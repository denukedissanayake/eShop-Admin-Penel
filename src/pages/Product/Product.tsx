import "./product.css"

const Product = () => {
  return (
    <div className="product-page-container">
      <h2 className="product-page-container-title">Product - Addidas Shoe</h2>
      <div className="product-page-items">

        <div className="product-page-item-details">
          <div className="product-details-header">
            <img className="product-details-header-image" src="https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png" alt="" />
            <span className="product-details-header-name">Shoe - Addidas</span>
          </div>
          <span className="product-details-title" >Product Details</span>
          <div className="product-details-item">
              <span><b>Product Name:</b></span>
              <span className="product-details-item-name">Shoe</span>
          </div>
          <div className="product-details-item">
              <span><b>Brand Name:</b></span>
              <span className="product-details-item-name">Addidas</span>
          </div>
          <div className="product-details-item">
              <span><b>Description:</b></span>
              <span className="product-details-item-name">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</span>
          </div>
          <div className="product-details-item">
              <span><b>Availability:</b></span>
              <span className="product-details-item-name">Available</span>
          </div>
          <div className="product-details-item">
              <span><b>Colors:</b></span>
              <span className="product-details-item-name">Black</span>
              <span className="product-details-item-name">Red</span>
          </div>
          <div className="product-details-item">
              <span><b>Sizes:</b></span>
              <span className="product-details-item-name">Small Medium Large</span>
          </div>
        </div>

        <div className="product-page-items-edit">
          <span className="edit-product-details-title">EDIT DETAILS</span>
          <form className="edit-product-details-items-form" >
            <div className="edit-product-details-items-container-wrapper">
              <div className="edit-product-details-items-container">
                <div className="edit-product-details-item">
                    <label className="edit-product-details-item-label">Product Name</label>
                    <input className="edit-product-details-item-input" defaultValue="shoe" placeholder="Enter Product Name" type="text"/>
                </div>
                <div className="edit-product-details-item">
                  <label className="edit-product-details-item-label">Product Brand</label>
                  <input className="edit-product-details-item-input" defaultValue="Addidas" placeholder="Enter Product Brand" type="text"/>
                </div>
                <div className="edit-product-details-item">
                    <label className="edit-product-details-item-label">Product Name</label>
                    <textarea className="edit-product-details-item-input" defaultValue="shoe" placeholder="Enter Product Name"/>
                </div>
              </div>
              <div>
                <div className="edit-product-details-image-wrapper">
                  <img alt="" className="edit-product-details-image" src="https://cdn0.iconfinder.com/data/icons/cosmo-layout/40/box-512.png" />
                  <label htmlFor="file">Upload Image</label>
                  <input id="file" type="file" style={{display: "none"}}/>
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
    </div>
  )
}

export default Product