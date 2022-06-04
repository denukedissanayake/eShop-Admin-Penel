import { useState } from 'react';
import './Sidebar.css'
import { Link, useNavigate } from "react-router-dom";
import { Modal } from '@mui/material';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import TheaterComedyRoundedIcon from '@mui/icons-material/TheaterComedyRounded';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import { useAuth } from '../../Context/AuthContext';

const Sidebar = () => {
    const [showModal, setShowModal] = useState(false);
    const { setUser } = useAuth()
    const navigation = useNavigate()

    const logout = () => {
        localStorage.removeItem('user');
        setShowModal(false);
        setUser(undefined)
        navigation("/login")
    }

    return (
        <div className='sidebar-container'>
            <div className='sidebar'>
                <div className='sidebar-dashboard-item'>
                        <h3 className='sidebar-dashboard-title'>DASHBOARD</h3>
                        <ul className='sidebar-menu'>
                            <Link to="/" className='router-link'>
                                <li className='sidebar-menu-item'>
                                    <HomeOutlinedIcon className='sidebar-menu-item-icon'/>
                                    HOME
                                </li>
                            </Link>
                            <Link to="/customers" className='router-link'>
                                <li className='sidebar-menu-item'>
                                    <TagFacesIcon className='sidebar-menu-item-icon'/>
                                    CUSTOMERS
                                </li>
                            </Link>
                            <Link to="/products" className='router-link'>
                                <li className='sidebar-menu-item'>
                                    <TheaterComedyRoundedIcon className='sidebar-menu-item-icon'/>
                                    PRODUCTS
                                </li>
                            </Link>
                            <Link to="/transactions" className='router-link'>
                                <li className='sidebar-menu-item'>
                                    <PaidOutlinedIcon className='sidebar-menu-item-icon'/>
                                    TRANSACTIONS
                                </li>
                            </Link>
                            <Link to="/users" className='router-link'>
                                <li className='sidebar-menu-item'>
                                    <SupervisorAccountOutlinedIcon className='sidebar-menu-item-icon'/>
                                    USERS
                                </li>
                            </Link>
                        </ul>
                </div>
                <div className='sidebar-dashboard-item'>
                        <h3 className='sidebar-dashboard-title'>QUICK LINKS</h3>
                        <ul className='sidebar-menu'>
                            <Link to="/add-user" className='router-link'>
                                <li className='sidebar-menu-item'>
                                    <AccountCircleOutlinedIcon className='sidebar-menu-item-icon'/>
                                    ADD USERS
                                </li>
                            </Link>
                            <Link to="/add-product" className='router-link'>
                                <li className='sidebar-menu-item'>
                                    <CategoryOutlinedIcon className='sidebar-menu-item-icon'/>
                                    ADD PRODUCTS
                                </li>
                            </Link>
                        </ul>
                </div>
                <div className='sidebar-dashboard-item'>
                        <h3 className='sidebar-dashboard-title'>COMMUNICATIN</h3>
                        <ul className='sidebar-menu'>
                            <li className='sidebar-menu-item'>
                                <EmailOutlinedIcon className='sidebar-menu-item-icon'/>
                                EMAILS
                            </li>
                            <li className='sidebar-menu-item'>
                                <WhatsappOutlinedIcon className='sidebar-menu-item-icon'/>
                                MESSAGES
                            </li>
                            <li className='sidebar-menu-item'>
                                <RateReviewOutlinedIcon className='sidebar-menu-item-icon'/>
                                FEEDBACKS
                            </li>
                        </ul>
                </div>
                <div className='sidebar-dashboard-item'>
                        <h3 className='sidebar-dashboard-title'>USER</h3>
                        <ul className='sidebar-menu'>
                        <Link to="/profile" className='router-link'>
                            <li className='sidebar-menu-item'>
                                <ManageAccountsOutlinedIcon className='sidebar-menu-item-icon'/>
                                PROFILE
                            </li>
                        </Link>
                            <li className='sidebar-menu-item' onClick={() => setShowModal(true)}>
                                <InsertChartOutlinedRoundedIcon className='sidebar-menu-item-icon'/>
                                LOGOUT
                            </li>
                            <li className='sidebar-menu-item'>
                                <ReportGmailerrorredOutlinedIcon className='sidebar-menu-item-icon'/>
                                REPORTS
                            </li>
                        </ul>
                    </div>
            </div> 
            <Modal open={showModal} onClose={() => setShowModal(false)} >
                <div className='modal-item-container'>
                <div className='logout-container'>
                    <p className='logout-container-text'>Do you want to logout?</p>
                    <div className='logout-container-buttton-container'>
                    <button className='logout-container-buttton' onClick={logout}>LOGOUT</button>
                    <button className='logout-container-buttton' onClick={() => setShowModal(false)}>CANCEL</button>
                    </div>
                </div>
                </div>
            </Modal>
        </div>
    )
}

export default Sidebar