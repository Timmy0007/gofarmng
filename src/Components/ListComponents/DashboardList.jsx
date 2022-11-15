import React from 'react'
import './DashboardList.css'


 const DashboardList =({img, content}) => {
    return (
        <div className='listContainer' >
            <img src={img} alt="" />
            <p>{content}</p>
            
        </div>
    )
}

export default DashboardList