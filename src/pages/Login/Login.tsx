import { useNavigate } from "react-router-dom"
import "./login.css"

type props = {
  setLogger?: React.Dispatch<React.SetStateAction<boolean>>
}

const Login = (props: props) => {
  const navigate = useNavigate();

  return (
    <div className="login-page-container">
      <div className="login-page">
        <div className="login-page-item">
          <label className="login-page-item-label">Enter Email</label>
          <input className="login-page-item-input" type='email' placeholder='Email' />
        </div>
        <div className="login-page-item">
          <label className="login-page-item-label">Enter Password</label>
          <input className="login-page-item-input" type='password' placeholder='Password' />
        </div>
          <button className="login-page-item-button" >Login</button>
      </div>
    </div>
  )
}

export default Login