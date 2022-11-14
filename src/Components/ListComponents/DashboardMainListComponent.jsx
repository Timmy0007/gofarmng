import React from 'react'
import DashboardIcon from '../../assets/dashboard-icon.png'
import FavouriteIcon from '../../assets/heart.png'
import TrackOrderIcon  from '../../assets/add-circle.png'
import OrderHistoryIcon from '../../assets/keyboard.png'
import SettingsIcon from '../../assets/settings-2.png'
import HelpIcon from '../../assets/help.png'
import '../ListComponents/DashboardMainListComponent.css'

const DashboardMainListComponent = () => {
    const listitems = [
       {img1: DashboardIcon,text: 'Dashboard' },
       {img1: FavouriteIcon, text: 'Favorite List'},
       {img1: TrackOrderIcon, text: 'Track Order'},
       {img1: OrderHistoryIcon, text: 'Order History'},
       {img1: SettingsIcon, text: 'Settings'},
       {img1: HelpIcon, text: 'Help'}
      
    ]
  return (
   
        <section>
            <h1>GoFarmNg</h1>
            <div className='dashboardlist'>
                <ul>
                   {listitems.map((item) => 
                   <li className='dashboardList'>${item.img1} &{item.text}</li>
                   )}
                </ul>
            </div>
        </section>
   
  )
}

export default DashboardMainListComponent