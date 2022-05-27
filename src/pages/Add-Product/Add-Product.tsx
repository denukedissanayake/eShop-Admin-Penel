import { useState } from "react";
import "./add-product.css";
import { addNewProduct } from "./data/add-product";
import { useAuth } from "../../Context/AuthContext";
import { DUMMY_PRODUCT_IMAGE } from "../../utils/additional-data";
import Alert from '@mui/material/Alert';
import { uploadImage } from "../../utils/image-upload-firebase";

const AddProduct = () => {
  const [photo, setPhoto] = useState<File | undefined>(undefined);
  const [name, setName] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [stock, setStock] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [availability, setAvailability] = useState<string>("Available");
  const [sizes, setSizes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const { user } = useAuth();

  const addProduct = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsLoading(true)

    const photoUrl = await uploadImage(photo!);

    const newProduct = {
      name,
      description,
      size: sizes,
      color: colors,
      categories,
      isAvailable: availability === "Available" ? true : false,
      image: photoUrl || DUMMY_PRODUCT_IMAGE,
      price,
      brand,
    }

    const { data, error } = await addNewProduct(newProduct, user?.accesToken);
    setIsLoading(false)
    if (error) {
      setIsError(true)
      setTimeout(() => setIsError(false), 3000)
      return;
    } 
    if (!error && data) {
      setIsSuccess(true)
      setPhoto(undefined);
      setName("")
      setBrand("")
      setPrice("")
      setDescription("")
      setAvailability("Available")
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    }
  } 

  const selectSizes = (e: any) => {
    const { value, checked } = e.target
    
    if (checked) {
      setSizes([...sizes, value])
    } else {
      setSizes(sizes.filter((e) => e !== value))
    }
  }

  const selectColors = (e: any) => {
    const { value, checked } = e.target
    
    if (checked) {
      setColors([...colors, value])
    } else {
      setColors(colors.filter((e) => e !== value))
    }
  }

  const selectCategories = (e: any) => {
    const { value, checked } = e.target
    
    if (checked) {
      setCategories([...categories, value])
    } else {
      setCategories(categories.filter((e) => e !== value))
    }
  }

  return (
    <div className="add-product-container">
      <span className="add-product-container-label">ADD PRODUCT</span>
      <form className="add-product-form">
        <div className="add-product-item">
          <label className="add-product-item-label">Product Name</label>
          <input
            value={name}
            className="add-product-item-input"
            type="text"
            placeholder="Enter Product Name"
            onChange={(e:any) => setName(e.target.value) }
          />
        </div>
        <div className="add-product-item">
          <label className="add-product-item-label">Product Brand</label>
          <input
            value={brand}
            className="add-product-item-input"
            type="text"
            placeholder="Enter Product Brand Name"
            onChange={(e:any) => setBrand(e.target.value) }
          />
        </div>
        <div className="add-product-item description">
          <label className="add-product-item-label">Product Description</label>
          <textarea
            value={description}
            className="add-product-item-input"
            placeholder="Enter Product Description"
            onChange={(e:any) => setDescription(e.target.value) }
          />
        </div>
        <div className="add-product-item">
          <label className="add-product-item-label">Product Price</label>
          <input
            value={price}
            className="add-product-item-input"
            type="text"
            placeholder="Enter Product Price"
            onChange={(e:any) => setPrice(e.target.value) }
          />
        </div>
        <div className="add-product-item">
          <label className="add-product-item-label">Product Stock Count</label>
          <input
            value={stock}
            className="add-product-item-input"
            type="text"
            placeholder="Enter Product Stock Count"
            onChange={(e:any) => setStock(e.target.value) }
          />
        </div>
        <div className="add-product-item-selection-wrapper">
          <div className="add-product-item-selection-buttons">
            <div className="add-product-item-radio-button">
              <label className="add-product-item-availability-label">Availablity</label>
              <div className="add-product-item-availability-wrapper">
                <span>
                  <input
                    type="radio"
                    name="availability"
                    value="Available"
                    checked={availability === "Available"}
                    onChange={(e) =>setAvailability(e.target.value)}
                    />
                    Available
                </span>
                <span>
                  <input
                    type="radio"
                    name="availability"
                    value="Not-Available"
                    checked={availability === "Not-Available"}
                    onChange={(e) =>setAvailability(e.target.value)}
                  />
                  Not-Available
                </span>
              </div>
            </div>
            <div className="add-product-item-check-box">
              <label className="add-product-item-size-label">Sizes</label>
              <div className="add-product-item-size-wrapper">
                <span><input type="checkbox" name="size" value="Extra Small" onChange={selectSizes} />Extra Small</span>
                <span><input type="checkbox" name="size" value="Small" onChange={selectSizes} />Small</span>
                <span><input type="checkbox" name="size" value="Medium" onChange={selectSizes} />Medium</span>
                <span><input type="checkbox" name="size" value="Large" onChange={selectSizes} />Large</span>
                <span><input type="checkbox" name="size" value="Extra Large" onChange={selectSizes} />Extra Large</span>
              </div>
            </div>
            <div className="add-product-item-check-box">
              <label className="add-product-item-color-label">Colors</label>
              <div className="add-product-item-color-wrapper">
                <span><input type="checkbox" name="color" value="Black" onChange={selectColors}/>Black</span>
                <span><input type="checkbox" name="color" value="White" onChange={selectColors}/>White</span>
                <span><input type="checkbox" name="color" value="Blue" onChange={selectColors}/>Blue</span>
                <span><input type="checkbox" name="color" value="Gray"onChange={selectColors} />Gray</span>
                <span><input type="checkbox" name="color" value="Red" onChange={selectColors}/>Red</span>
                <span><input type="checkbox" name="color" value="Other" onChange={selectColors}/>Other</span>
              </div>
            </div>
            <div className="add-product-item-check-box">
              <label className="add-product-item-category-label">Categories</label>
              <div className="add-product-item-category-wrapper">
                <span><input type="checkbox" name="category" value="Men" onChange={selectCategories}/>Men</span>
                <span><input type="checkbox" name="category" value="Women" onChange={selectCategories}/>Women</span>
                <span><input type="checkbox" name="category" value="Kids" onChange={selectCategories}/>Kids</span>
                <span><input type="checkbox" name="category" value="Office-Ware" onChange={selectCategories}/>Office Ware</span>
                <span><input type="checkbox" name="category" value="Casual-Ware" onChange={selectCategories}/>Casual Ware</span>
                <span><input type="checkbox" name="category" value="Shoes" onChange={selectCategories}/>Shoes</span>
                <span><input type="checkbox" name="category" value="Party-Ware" onChange={selectCategories}/>Party Ware</span>
                <span><input type="checkbox" name="category" value="Underwares" onChange={selectCategories}/>Underwares</span>
                <span><input type="checkbox" name="category" value="Warebles" onChange={selectCategories}/>Warebles</span>
                <span><input type="checkbox" name="category" value="Other" onChange={selectCategories}/>Other</span>
              </div>
            </div>
          </div>
          <div className="add-product-item-selection-image">
            <div className="add-product-item-selection-image-wrapper">
              <img alt="" className="add-product-image" src={photo ? URL.createObjectURL(photo) : undefined} />
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
        <div className="product-added-info-alerts">
          {isError && <Alert severity="error">Product Adding Failed. Please Try Again!</Alert>}
          {isSuccess &&  <Alert severity="success">Product added Succesfully!</Alert>}
        </div>
        <div className="add-product-item-button-wrapper">
          <button
            disabled={isLoading || !photo || !name || !brand || categories.length === 0 || !availability || colors.length === 0}
            className="add-product-item-button"
            onClick={addProduct}>{isLoading ? "ADDING PRODUCT..." :"ADD PRODUCT"}</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct

function hello(hello: any): () => void {
  throw new Error("Function not implemented.");
}
