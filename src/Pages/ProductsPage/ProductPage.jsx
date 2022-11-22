import { useState } from "react"
import React from 'react'
import Banana from "./../../assets/Banana.png"
import Bana from "./../../assets/banna.PNG"
import bannna from "./../../assets/bannna.PNG"
import "./ProductPage.css"
import Star from "../../Components/Star"
import Increment from "../../Components/IncrementDecrement"
import Button from  "../../Components/Button"
import BreadFruit from "../../assets/BreadFruit.png"
import Orange from "../../assets/Orange.png"
import Golden from "../../assets/GoldenMelon.png"
import Apple from "../../assets/Apple.png"
import Tomato from "../../assets/Tomato.png"
import Guava from "../../assets/Guava.png"
import Pawpaw from "../../assets/Pawpaw.png"
import Carrot from "../../assets/carrot.png"
// import Card from "../../Components/Card"


const ProductPage = () => {
    const imgs=[
        {id:0, value: Bana},
        {id:1, value:bannna},
        {id:2, value:bannna},

      ]
      const [sliderData, setSliderData]= useState(imgs[0])
      const handleClick=(index)=>{
        console.log(index);
        const slider=imgs[index];
        setSliderData(slider);
      }
       
  return (
      <div>
        <div className="productpage-container">
          <div className="nike">
            <img src={sliderData.value} height="" width="1000px" alt=""/>
            <div className='flex-row'>
              {
              imgs.map((data, i)=>
              <div className='thumbnails'>
                <img className={sliderData.id===i?"clicked":""} key={data.id}src={data.value} alt=""onClick={()=>handleClick(i)} height="80" width="80"/>
                </div>
                )
                } 
              </div>
            </div>
            <div className="right-text">
              <h5>Farm Fresh Banana</h5>
              <Star/>
              <h6>#1000 <span>/kg</span></h6>
              <p className="text">Shop farm fresh banana. What is the benefits of banana?
                Bananas are a popular fruit with many potential health benefits. They may boost your digestion and heart health thanks to their fiber and antioxidant contents. Plus, they may support weight loss because they're relatively low in calories, nutrient dense, and filling.</p>
                <p className="seller"> Seller: <span>The Vine Farms</span></p>
                <p className="seller"> Categories: <span>Fruits</span></p>
              <div className="quality">
                <p>Quantity: </p>
                <Increment/>
                <Button/>
              </div>

  
              
            </div>
        </div>
        <div className="related">
            <h3>Related Products</h3>
            <div className="related-container">
             <div className="first">
                <img className="bck" src={BreadFruit} alt=""/>
                <p className="name">Fresh Bread Fruit</p>
                <p className="star"><Star/></p>
                <p className="name">#1,000 <span>/Kg</span></p>
                <p className="star"><Increment/></p>
                <p className="star"><Button/></p>
             </div>
             <div className="first">
                <img className="bck" src={Orange} alt=""/>
                <p className="name">Fresh Orange</p>
                <p className="star"><Star/></p>
                <p className="name">#1,000 <span>/Kg</span></p>
                <p className="star"><Increment/></p>
                <p className="star"><Button/></p>
             </div>
             <div className="first">
                <img className="bck" src={Apple} alt=""/>
                <p className="name">Fresh Apple</p>
                <p className="star"><Star/></p>
                <p className="name">#1,000 <span>/Kg</span></p>
                <p className="star"><Increment/></p>
                <p className="star"><Button/></p>
             </div>
             <div className="first">
                <img className="bck" src={Golden} alt=""/>
                <p className="name">Fresh Guava</p>
                <p className="star"><Star/></p>
                <p className="name">#1,000 <span>/Kg</span></p>
                <p className="star"><Increment/></p>
                <p className="star"><Button/></p>
             </div>
          </div>  
          <div className="related-container">
             <div className="first">
                <img className="bck" src={Tomato} alt=""/>
                <p className="name"> Fresh Tomato</p>
                <p className="star"><Star/></p>
                <p className="name">#1,000 <span>/Kg</span></p>
                <p className="star"><Increment/></p>
                <p className="star"><Button/></p>
             </div>
             <div className="first">
                <img className="bck" src={Carrot} alt=""/>
                <p className="name">Fresh Carrot</p>
                <p className="star"><Star/></p>
                <p className="name">#1,000 <span>/Kg</span></p>
                <p className="star"><Increment/></p>
                <p className="star"><Button/></p>
             </div>
             <div className="first">
                <img className="bck" src={Guava} alt=""/>
                <p className="name">Fresh Guava</p>
                <p className="star"><Star/></p>
                <p className="name">#1,000 <span>/Kg</span></p>
                <p className="star"><Increment/></p>
                <p className="star"><Button/></p>
             </div>
             <div className="first">
                <img className="bck" src={Pawpaw} alt=""/>
                <p className="name">Fresh Pawpaw </p>
                <p className="star"><Star/></p>
                <p className="name">#1,000 <span>/Kg</span></p>
                <p className="star"><Increment/></p>
                <p className="star"><Button/></p>
             </div>
      </div>
       </div>
       </div>
      
  )
}

export default ProductPage
