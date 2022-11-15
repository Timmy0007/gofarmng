import React  from 'react'
import DashboardIcon from '../../assets/dashboard-icon.png'
import FavouriteIcon from '../../assets/heart.png'
import TrackOrderIcon  from '../../assets/add-circle.png'
import OrderHistoryIcon from '../../assets/keyboard.png'
import SettingsIcon from '../../assets/setting-2.png'
import helpIcon from '../../assets/help.png'
import '../ListComponents/DashboardMainListComponent.css'
// import DashboardList from '../ListComponents/DashboardList'

const DashboardMainListComponent = () => {
    const listitems = [
       {img: DashboardIcon,content: 'Dashboard' },
       {img: FavouriteIcon, content: 'Favorite List'},
       {img: TrackOrderIcon, content: 'Track Order'},
       {img: OrderHistoryIcon, content: 'Order History'},
       {img: SettingsIcon, content: 'Settings'},
       {img: helpIcon, content: 'Help'},
      
    ]
  return (
   
        <section>
            <h1>GoFarmNg</h1>
            <div>{
              listitems.map((item) => (<div className='sidebar'>{item.img} {item.content}</div>) )
              
              }
            </div>
        </section>
   
  )
}

export default DashboardMainListComponent