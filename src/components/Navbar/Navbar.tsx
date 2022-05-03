import "./Navbar.css"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className="nav-bar-container">
        <div className="nav-bar">
            <div className="nav-bar-left">
                <span className="nav-bar-left-text">ADMIN CENTER</span> 
            </div>
              <div className="nav-bar-right">
                  <div className="nav-bar-right-icons">
                    <NotificationsNoneOutlinedIcon />
                    <span className="noftification-count">2</span>
                  </div>
                  <div className="nav-bar-right-icons">
                    <LanguageOutlinedIcon />
                    <span className="noftification-count">2</span>
                  </div>
                  <div className="nav-bar-right-icons">
                    <SettingsOutlinedIcon />
                  </div>
                <div className="profile-pic-container">
                    <img className="profile-pic" src="https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=" alt="profile pic"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar