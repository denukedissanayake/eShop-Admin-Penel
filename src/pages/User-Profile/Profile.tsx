import "./profile.css"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import ShareLocationOutlinedIcon from '@mui/icons-material/ShareLocationOutlined';

const Profile = () => {
  return (
    <div className="profile-page-container">
      <h2 className="profile-page-container-title">MY PROFILE PAGE</h2>
      <div className="profile-page-items">
        <div className="profile-details">
          <div className="profile-details-header">
            <img className="profile-details-header-image" src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" alt="" />
            <span className="profile-details-header-name">John Snow</span>
          </div>
          <span className="profile-details-title" >Account Details</span>
          <div className="profile-details-item">
            <PersonOutlineOutlinedIcon />
            <span className="profile-details-item-name">john99</span>
          </div>
          <div className="profile-details-item">
            <CalendarMonthOutlinedIcon />
            <span className="profile-details-item-name">2022 jun 1</span>
          </div>
          <span className="profile-details-title" >Contact Details</span>
          <div className="profile-details-item">
            <MailOutlineOutlinedIcon />
            <span className="profile-details-item-name">john@xyz.com</span>
          </div>
          <div className="profile-details-item">
            <PhoneIphoneOutlinedIcon />
            <span className="profile-details-item-name">+11 123 8794</span>
          </div>
          <div className="profile-details-item">
            <ShareLocationOutlinedIcon />
            <span className="profile-details-item-name">Colombo - Sri Lanka</span>
          </div>
        </div>
        <div className="edit-profile-details">
          <span className="edit-profile-details-title">EDIT DETAILS</span>
          <form className="edit-profile-details-items-form" >
            <div className="edit-profile-details-items-container">
              <div className="edit-profile-details-item">
                <label className="edit-profile-details-item-label">User Name</label>
                <input className="edit-profile-details-item-input" defaultValue="john99" placeholder="username" type="text"/>
              </div>
              <div className="edit-profile-details-item">
                <label className="edit-profile-details-item-label">Name</label>
                <input className="edit-profile-details-item-input" defaultValue="John Snow" placeholder="name"  type="text"/>
              </div>
              <div className="edit-profile-details-item">
                <label className="edit-profile-details-item-label">Email</label>
                <input className="edit-profile-details-item-input" defaultValue="john@xyz.com" placeholder="email" type="text"/>
              </div>
              <div className="edit-profile-details-item">
                <label className="edit-profile-details-item-label">Contact Number</label>
                <input className="edit-profile-details-item-input" defaultValue="+11 123 8794" placeholder="contact number"/>
              </div>
              <div className="edit-profile-details-item">
                <label className="edit-profile-details-item-label">Location</label>
                <input className="edit-profile-details-item-input" defaultValue="Colombo - Sri Lanka" placeholder="location"  type="text"/>
              </div>
            </div>
            <div className="edit-profile-details-image-container">
              <div className="edit-profile-details-image-wrapper">
                <img alt="" className="edit-profile-details-image" src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" />
                <label htmlFor="file">Upload Image</label>
                <input id="file" type="file" style={{display: "none"}}/>
              </div>
              <div>
                <button className="edit-profile-details-save">UPDATE</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Profile