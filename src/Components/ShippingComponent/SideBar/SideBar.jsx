import React from 'react'
import DashboardIcon from '../../../assets/dashboard-icon.png'
import Plus from '../../../assets/add-circle.png'
import Settings from '../../../assets/setting-2.png'
import Help from '../../../assets/help.png'
import OrderHistory from '../../../assets/keyboard.png'
import '../SideBar/SideBar.css'



const SideBar = () => {
  return (
    <div><h1>GoFarmNg</h1>
        
            <div className='sidebar-button'><img src={DashboardIcon} alt="image" /><p>Dashboard</p></div>
            <div className='sidebar-button'><img src={Plus} alt="image" /><p>Product</p></div>
            <div className='sidebar-button'><img src={OrderHistory} alt="image" />Order History</div>
            <div className='sidebar-button'><img src={Settings} alt="image" />Settings</div>
            <div className='sidebar-button'><img src={Help} alt="image" />Help</div>
           
       
    </div>
  )
}

export default SideBar