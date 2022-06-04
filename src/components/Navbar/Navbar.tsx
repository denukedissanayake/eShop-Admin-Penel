import "./Navbar.css"
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useAuth } from "../../Context/AuthContext";
import { DUMMY_USER_IMAGE } from "../../utils/additional-data";
import { Link } from "react-router-dom";

type Props = {}

const Navbar = (props: Props) => {
  const {user} = useAuth()
  
  return (
    <div className="nav-bar-container">
        <div className="nav-bar">
              <Link to="/" className="router-link">
                <div className="nav-bar-left">
                  <span className="nav-bar-left-text">ADMIN CENTER</span> 
                </div>
              </Link>
              <div className="nav-bar-right">
                  <div className="nav-bar-right-icons">
                    <NotificationsNoneOutlinedIcon />
                    <span className="noftification-count">2</span>
                  </div>
                  <div className="nav-bar-right-icons">
                    <LanguageOutlinedIcon />
                    <span className="noftification-count">2</span>
                  </div>
                  <Link to="/profile" className="router-link">
                    <div className="nav-bar-right-icons">
                      <SettingsOutlinedIcon />
                    </div>
                  </Link>
                  <Link to="/profile" className="router-link">
                    <div className="profile-pic-container">
                      <img className="profile-pic" src={user?.photo || DUMMY_USER_IMAGE} alt="profile pic"/>
                    </div>
                  </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar