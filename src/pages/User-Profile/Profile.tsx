import "./profile.css"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import ShareLocationOutlinedIcon from '@mui/icons-material/ShareLocationOutlined';
import { useAuth } from "../../Context/AuthContext";
import { DUMMY_USER_IMAGE } from "../../utils/additional-data";
import { useState } from "react";
import { updateProfile } from "./data/update-profile";
import { uploadImage } from "../../utils/image-upload-firebase";

const Profile = () => {
  const { user ,setUser } = useAuth()
  const [photo, setPhoto] = useState<File | undefined>(undefined) 
  const [updatedUser, setUpdatedUser] = useState<any>({})
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateUser = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    let photoUrl = ""

    setIsLoading(true)

    if (photo) {
      photoUrl = await uploadImage(photo)
    }

    const { data, error } = await updateProfile({ ...updatedUser, photo: photoUrl }, user?.id, user?.accesToken);

    if (!error && data) {
      setUser({
        ...user,
        ...data
      })
    }

    setIsLoading(false)
  };


  return (
    <div className="profile-page-container">
      <h2 className="profile-page-container-title">MY PROFILE PAGE</h2>
      <div className="profile-page-items">
        <div className="profile-details">
          <div className="profile-details-header">
            <img className="profile-details-header-image" src={user?.photo || DUMMY_USER_IMAGE} alt="" />
            <span className="profile-details-header-name">{user?.name}</span>
          </div>
          <span className="profile-details-title" >Account Details</span>
          <div className="profile-details-item">
            <PersonOutlineOutlinedIcon />
            <span className="profile-details-item-name">{user?.username}</span>
          </div>
          <div className="profile-details-item">
            <CalendarMonthOutlinedIcon />
            <span className="profile-details-item-name">2022 jun 1</span>
          </div>
          <span className="profile-details-title" >Contact Details</span>
          <div className="profile-details-item">
            <MailOutlineOutlinedIcon />
            <span className="profile-details-item-name">{user?.email}</span>
          </div>
          <div className="profile-details-item">
            <PhoneIphoneOutlinedIcon />
            <span className="profile-details-item-name">{user?.contactdetails || "--"}</span>
          </div>
          <div className="profile-details-item">
            <ShareLocationOutlinedIcon />
            <span className="profile-details-item-name">{user?.location || "--"}</span>
          </div>
        </div>
        <div className="edit-profile-details">
          <span className="edit-profile-details-title">EDIT DETAILS</span>
          <form className="edit-profile-details-items-form" >
            <div className="edit-profile-details-items-container">
              <div className="edit-profile-details-item">
                <label className="edit-profile-details-item-label">Name</label>
                <input
                  className="edit-profile-details-item-input"
                  defaultValue={user?.name}
                  placeholder="Enter Name"
                  type="text"
                  onChange={(e: any) => setUpdatedUser({
                    ...updatedUser,
                    name: e.target.value
                  })}
                />
              </div>
              <div className="edit-profile-details-item">
                <label className="edit-profile-details-item-label">User Name</label>
                <input
                  className="edit-profile-details-item-input"
                  defaultValue={user?.username}
                  placeholder="Enter Username"
                  type="text"
                  onChange={(e: any) => setUpdatedUser({
                    ...updatedUser,
                    username: e.target.value
                  })}
                />
              </div>
              <div className="edit-profile-details-item">
                <label className="edit-profile-details-item-label">Contact Number</label>
                <input
                  className="edit-profile-details-item-input"
                  defaultValue={user?.contactdetails}
                  placeholder="Enter Contact Number"
                  onChange={(e: any) => setUpdatedUser({
                    ...updatedUser,
                    contactdetails: e.target.value
                  })}
                />
              </div>
              <div className="edit-profile-details-item">
                <label className="edit-profile-details-item-label">Location</label>
                <input
                  className="edit-profile-details-item-input"
                  defaultValue={user?.location}
                  placeholder="Enter Location"
                  type="text"
                  onChange={(e: any) => setUpdatedUser({
                    ...updatedUser,
                    location: e.target.value
                  })}
                />
              </div>
              <label>Need to Change Your Password?</label>
              <div className="edit-profile-details-item">
                <label className="edit-profile-details-item-label">Old Password</label>
                <input
                  className="edit-profile-details-item-input"
                  placeholder="Enter Old Password"
                  type="password"
                  onChange={(e: any) => setUpdatedUser({
                    ...updatedUser,
                    oldPassword: e.target.value
                  })}
                />
              </div>
              <div className="edit-profile-details-item">
                <label className="edit-profile-details-item-label">New Password</label>
                <input
                  className="edit-profile-details-item-input"
                  placeholder="Enter New Password"
                  type="password"
                  onChange={(e: any) => setUpdatedUser({
                    ...updatedUser,
                    newPassword: e.target.value
                  })}
                />
              </div>
            </div>
            <div className="edit-profile-details-image-container">
              <div className="edit-profile-details-image-wrapper">
                <img alt=""
                  className="edit-profile-details-image"
                  src={photo ? URL.createObjectURL(photo) : user?.photo || DUMMY_USER_IMAGE}
                />
                    {!photo &&
                      <>
                        <label htmlFor="file">Upload Image</label>
                        <input id="file" type="file" style={{ display: "none" }} onChange={(e: any) => setPhoto(e.target.files[0])} />
                      </>}
                    {photo &&  
                      <>
                        <label onClick={() => setPhoto(undefined)}>Remove</label>
                      </>
                    }
              </div>
              <div>
                <button onClick={updateUser}
                  disabled={isLoading}
                  className="edit-profile-details-save">{isLoading ? "UPDATING..." :"UPDATE"}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile