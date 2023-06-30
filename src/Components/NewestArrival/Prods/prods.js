import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from './../../context/context';
import { product } from '../Product/product';
import { list } from '../list';

const Prods = (props) => {
    const {id, pcs, productName, productImage, productImage2, price} = props.data;
    const {addToCart, removeFromCart, cartItems} = useContext(ShopContext);
   console.log(product)
    
    const [backgroundColor, setBackgroundColor] = useState("");
  const[height, setHeight]= useState("")
  const[width, setWidth]= useState("")
  const[transition, setTransition]= useState("")
  const [message, setMessage]= useState('0')

  

  function handleAdd(){
    if (addToCart){
      setMessage(Number(message) + 1)
    }
  }

  function handleRemove(){
    if (removeFromCart && Number(message) >= 1){
      setMessage(Number(message) - 1)
    }
  }



  const styles = {
    'width': width,
   'height': height,
    backgroundColor: backgroundColor,
    transition: transition
  };





  function hoverEffect(){
    setWidth('265px');  setTransition('2s') 
  }

  function hoverOut(){
    setBackgroundColor(""); setWidth(''); setHeight('');
  }

  
  

  return (
        <div>
        <div className= "top-fruit">
          <div className='newest-fruit'
          >
            <div className='newss'
             onMouseEnter={hoverEffect}
             onMouseLeave={hoverOut}
            >
            <div className='newest-img'>
            <img style={styles} className='newimg1' src={productImage}/>
            </div>
            <div>
              <p className="newest-name">{productName}</p>
            </div>
            <div className="newest-ratings">
              <img src={productImage2} alt="Ratings" />
              <p className="twelve">(12)</p>
            </div>
            <div className="newest-price">
                <p>#{price}</p>
                <p className="pcs">{pcs}</p>
            </div>
            </div>

            <div className="plus-minus">
              <button className="-"
              onClick={() =>{
                removeFromCart(id);
                handleRemove();
             }}>
                -
                </button>

              <p className="two"> {message} </p>

              <button className="pluss"
              onClick={() =>{
                addToCart(id);
                handleAdd();
             }}>
                +
                </button>
            </div>
            <div>
              <button className="cartt-button" onClick={() =>{
                 addToCart(id);
                 handleAdd();
              }}>
                Add to Cart
                
                </button>
            </div>
          </div>
        </div>
        </div>

    
  )
}

export default Prods;