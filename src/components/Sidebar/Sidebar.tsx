import './Sidebar.css'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import TopicOutlinedIcon from '@mui/icons-material/TopicOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WhatsappOutlinedIcon from '@mui/icons-material/WhatsappOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import ManageAccountsOutlinedIcon from '@mui/icons-material/ManageAccountsOutlined';
import ReportGmailerrorredOutlinedIcon from '@mui/icons-material/ReportGmailerrorredOutlined';
import InsertChartOutlinedRoundedIcon from '@mui/icons-material/InsertChartOutlinedRounded';

type Props = {}

function Sidebar({}: Props) {
  return (
    <div className='sidebar-container'>
          <div className='sidebar'>
              <div className='sidebar-dashboard-item'>
                    <h3 className='sidebar-dashboard-title'>DASHBOARD</h3>
                    <ul className='sidebar-menu'>
                        <li className='sidebar-menu-item'>
                            <HomeOutlinedIcon className='sidebar-menu-item-icon'/>
                            HOME
                        </li>
                        <li className='sidebar-menu-item'>
                            <BarChartOutlinedIcon className='sidebar-menu-item-icon'/>
                            ANYLYTICS
                        </li>
                        <li className='sidebar-menu-item'>
                            <TrendingUpOutlinedIcon className='sidebar-menu-item-icon'/>
                            SALES
                        </li>
                    </ul>
              </div>
              <div className='sidebar-dashboard-item'>
                    <h3 className='sidebar-dashboard-title'>QUICK LINKS</h3>
                    <ul className='sidebar-menu'>
                        <li className='sidebar-menu-item'>
                            <AccountCircleOutlinedIcon className='sidebar-menu-item-icon'/>
                            USERS
                        </li>
                        <li className='sidebar-menu-item'>
                            <CategoryOutlinedIcon className='sidebar-menu-item-icon'/>
                            PRODUCTS
                        </li>
                        <li className='sidebar-menu-item'>
                            <PaidOutlinedIcon className='sidebar-menu-item-icon'/>
                            PAYMENTS
                      </li>
                      <li className='sidebar-menu-item'>
                            <TopicOutlinedIcon className='sidebar-menu-item-icon'/>
                            DOCUMENTS
                        </li>
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
                            FEEDBACK
                        </li>
                    </ul>
              </div>
              <div className='sidebar-dashboard-item'>
                    <h3 className='sidebar-dashboard-title'>USERS</h3>
                    <ul className='sidebar-menu'>
                        <li className='sidebar-menu-item'>
                            <ManageAccountsOutlinedIcon className='sidebar-menu-item-icon'/>
                            MANAGE
                        </li>
                        <li className='sidebar-menu-item'>
                            <InsertChartOutlinedRoundedIcon className='sidebar-menu-item-icon'/>
                            STATISTICS
                        </li>
                        <li className='sidebar-menu-item'>
                            <ReportGmailerrorredOutlinedIcon className='sidebar-menu-item-icon'/>
                            REPORTS
                        </li>
                    </ul>
                </div>
          </div> 
    </div>
  )
}

export default Sidebar