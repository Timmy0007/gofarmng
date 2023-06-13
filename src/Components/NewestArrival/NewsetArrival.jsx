import React, { useState, useEffect } from "react";
import coconut from "../../assets/coconnut.svg";
import watermelon from "../../assets/watermelon.svg";
import pineapple from "../../assets/pineapple.svg";
import whiteLove from "../../assets/whiteLove.svg";
import pawpaw from "../../assets/pawpaw.svg";
import stars from "../../assets/stars.svg";
import "./NewestArrival.css";
import { product } from "./Product/product";
import Prods from "./Prods/prods.js";


 function NewestArrival() {

//   const [backgroundColor, setBackgroundColor] = useState("");
//   const[height, setHeight]= useState("")
//   const[width, setWidth]= useState("")
//   const[transition, setTransition]= useState("")
//   const [backgroundColorWm, setBackgroundColorWm] = useState("");
//   const[heightWm, setHeightWm]= useState("")
//   const[widthWm, setWidthWm]= useState("")
//   const[transitionWm, setTransitionWm]= useState("")
//   const [backgroundColorPine, setBackgroundColorPine] = useState("");
//   const[heightPine, setHeightPine]= useState("")
//   const[widthPine, setWidthPine]= useState("")
//   const[transitionPine, setTransitionPine]= useState("")
//   const [backgroundColorPawpaw, setBackgroundColorPawpaw] = useState("");
//   const[heightPawpaw, setHeightPawpaw]= useState("")
//   const[widthPawpaw, setWidthPawpaw]= useState("")
//   const[transitionPawpaw, setTransitionPawpaw]= useState("")

//   const [backgroundColor1, setBackgroundColor1] = useState("");
//   const[height1, setHeight1]= useState("")
//   const[width1, setWidth1]= useState("")
//   const[transition1, setTransition1]= useState("")
//   const [backgroundColorWm2, setBackgroundColorWm2] = useState("");
//   const[heightWm2, setHeightWm2]= useState("")
//   const[widthWm2, setWidthWm2]= useState("")
//   const[transitionWm2, setTransitionWm2]= useState("")
//   const [backgroundColorPine2, setBackgroundColorPine2] = useState("");
//   const[heightPine2, setHeightPine2]= useState("")
//   const[widthPine2, setWidthPine2]= useState("")
//   const[transitionPine2, setTransitionPine2]= useState("")
//   const [backgroundColorPawpaw2, setBackgroundColorPawpaw2] = useState("");
//   const[heightPawpaw2, setHeightPawpaw2]= useState("")
//   const[widthPawpaw2, setWidthPawpaw2]= useState("")
//   const[transitionPawpaw2, setTransitionPawpaw2]= useState("")





//   const styles = {
//     'width': width,
//    'height': height,
//     backgroundColor: backgroundColor,
//     transition: transition
//   };

//   const styleWm = {
//     'width': widthWm,
//    'height': heightWm,
//     backgroundColor: backgroundColorWm,
//     transition: transitionWm
//   };

//   const stylePine = {
//     'width': widthPine,
//    'height': heightPine,
//     backgroundColor: backgroundColorPine,
//     transition: transitionPine
//   };

//   const stylePawpaw = {
//     'width': widthPawpaw,
//    'height': heightPawpaw,
//     backgroundColor: backgroundColorPawpaw,
//     transition: transitionPawpaw
//   };

//   const styles1 = {
//     'width': width1,
//    'height': height1,
//     backgroundColor: backgroundColor1,
//     transition: transition1
//   };

//   const styleWm2 = {
//     'width': widthWm2,
//    'height': heightWm2,
//     backgroundColor: backgroundColorWm2,
//     transition: transitionWm2
//   };

//   const stylePine2 = {
//     'width': widthPine2,
//    'height': heightPine2,
//     backgroundColor: backgroundColorPine2,
//     transition: transitionPine2
//   };

//   const stylePawpaw2 = {
//     'width': widthPawpaw2,
//    'height': heightPawpaw2,
//     backgroundColor: backgroundColorPawpaw2,
//     transition: transitionPawpaw2
//   };



//   function hoverEffect(){
//     setWidth('280px');  setTransition('2s') 
//   }

//   function hoverOut(){
//     setBackgroundColor(""); setWidth(''); setHeight('');
//   }

//   function hoverWm(){
//     setWidthWm('280px');  setTransitionWm('2s') 
//   }

//   function hoverWmOut(){
//     setWidthWm(''); setHeightWm('');
//   }

//   function hoverPine(){
//     setWidthPine('280px');  setTransitionPine('2s') 
//   }

//   function hoverPineOut(){
//     setWidthPine(''); setHeightPine('');
//   }

//   function hoverPawpaw(){
//     setWidthPawpaw('270px');  setTransitionPawpaw('2s') 
//   }

//   function hoverPawpawOut(){
//     setWidthPawpaw(''); setHeightPawpaw('');
//   }

//   function hoverEffect1(){
//     setWidth1('280px');  setTransition1('2s') 
//   }

//   function hoverOut1(){
//    setWidth1(''); setHeight1('');
//   }

//   function hoverWm2(){
//     setWidthWm2('280px');  setTransitionWm2('2s') 
//   }

//   function hoverWmOut2(){
//     setWidthWm2(''); setHeightWm2('');
//   }

//   function hoverPine2(){
//     setWidthPine2('280px');  setTransitionPine2('2s') 
//   }

//   function hoverPineOut2(){
//     setWidthPine2(''); setHeightPine2('');
//   }

//   function hoverPawpaw2(){
//     setWidthPawpaw2('270px');  setTransitionPawpaw2('2s') 
//   }

//   function hoverPawpawOut2(){
//     setWidthPawpaw2(''); setHeightPawpaw2('');
//   }

  
// 
//       <h3 className="newest-header">Newest Arrival</h3>

//       <div className="newest-fruits">
//         <div className="newest-fruit" id="newestfruit1"  
//         onMouseEnter={hoverEffect}
//          onMouseLeave={hoverOut}
//          >
//           <div>
//             <img className="icon" src={whiteLove} alt="Love" />
//             <img className="newimg1" id="coco" style={styles}  src={coconut} alt="Coconut" />
//             </div>
//             <div>
//               <p className="newest-name">Farm Fresh Coconut</p>
//             </div>
//             <div className="newest-ratings">
//               <img src={stars} alt="Ratings" />
//               <p className="twelve">(12)</p>
//             </div>
//             <div className="newest-price">
//                 <p>#1,000</p>
//                 <p className="pcs"> /Pcs</p>
//             </div>
//             <div className="plus-minus">
//               <button className="-">-</button>
//               <p className="two">2</p>
//               <button className="+">+</button>
//             </div>
//             <div>
//               <button className="cart-button">Add to Cart</button>
//             </div>
//         </div>

//         <div className="newest-fruit"
//         onMouseEnter={hoverWm}
//         onMouseLeave={hoverWmOut}
//         >
//           <div className="newest-img">
//             <img className="icon" src={whiteLove} alt="Love" />
//             <img className="newimg2" style={styleWm}  src={watermelon} alt="Coconut" />
//           </div>
//           <div>
//             <div>
//               <p className="newest-name">Farm Fresh WaterMelon</p>
//             </div>
//             <div className="newest-ratings">
//               <img src={stars} alt="Ratings" />
//               <p className="twelve">(12)</p>
//             </div>
//               <div className="newest-price">
//                 <p>#1,000</p>
//                 <p className="pcs">/Pcs</p>
//             </div>
//             <div className="plus-minus">
//               <button className="-">-</button>
//               <p className="two">2</p>
//               <button className="+">+</button>
//             </div>
//             <div>
//               <button className="cart-button">Add to Cart</button>
//             </div>
//           </div>
//         </div>

//         <div className="newest-fruit"
//         onMouseEnter={hoverPine}
//         onMouseLeave={hoverPineOut}
//         >
//           <div className="newest-img">
//             <img className="icon" src={whiteLove} alt="Love" />
//             <img className="newimg3" style={stylePine}  src={pineapple} alt="Coconut" />
//           </div>
//           <div>
//             <div>
//               <p className="newest-name">Farm Fresh Pineapple</p>
//             </div>
//             <div className="newest-ratings">
//               <img src={stars} alt="Ratings" />
//               <p className="twelve">(12)</p>
//             </div>
//             <div className="newest-price">
//                 <p>#1,000</p>
//                 <p className="pcs">/Pcs</p>
//             </div>
//             <div className="plus-minus">
//               <button className="-">-</button>
//               <p className="two">2</p>
//               <button className="+">+</button>
//             </div>
//             <div>
//               <button className="cart-button">Add to Cart</button>
//             </div>
//           </div>
//         </div>

//         <div className="newest-fruit"
//         onMouseEnter={hoverPawpaw}
//         onMouseLeave={hoverPawpawOut}
//         >
//           <div className="newest-img">
//             <img className="icon" src={whiteLove} alt="Love" />
//             <img className="newimg4" style={stylePawpaw} src={pawpaw} alt="Coconut" />
//           </div>
//           <div>
//             <div>
//               <p className="newest-name">Farm Fresh Pawpaw</p>
//             </div>
//             <div className="newest-ratings">
//               <img src={stars} alt="Ratings" />
//               <p className="twelve">(12)</p>
//             </div>
//             <div className="newest-price">
//                 <p>#1,000</p>
//                 <p className="pcs">/Pcs</p>
//             </div>
//             <div className="plus-minus">
//               <button className="-">-</button>
//               <p className="two">2</p>
//               <button className="+">+</button>
//             </div>
//             <div>
//               <button className="cart-button">Add to Cart</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="newest-fruits">
//         <div className="newest-fruit"
//         onMouseEnter={hoverEffect1}
//         onMouseLeave={hoverOut1}
//         >
//           <div className="newest-img">
//             <img className="icon" src={whiteLove} alt="Love" />
//             <img className="newimg1" style={styles1} src={coconut} alt="Coconut" />
//           </div>
//           <div>
//             <div>
//               <p className="newest-name">Farm Fresh Coconut</p>
//             </div>
//             <div className="newest-ratings">
//               <img src={stars} alt="Ratings" />
//               <p className="twelve">(12)</p>
//             </div>
//             <div className="newest-price">
//                 <p>#1,000</p>
//                 <p className="pcs"> /Pcs</p>
//             </div>
//             <div className="plus-minus">
//               <button className="-">-</button>
//               <p className="two">2</p>
//               <button className="+">+</button>
//             </div>
//             <div>
//               <button className="cart-button">Add to Cart</button>
//             </div>
//           </div>
//         </div>

//         <div className="newest-fruit"
//         onMouseEnter={hoverWm2}
//         onMouseLeave={hoverWmOut2}
//         >
//           <div className="newest-img">
//             <img className="icon" src={whiteLove} alt="Love" />
//             <img className="newimg2" style={styleWm2} src={watermelon} alt="Coconut" />
//           </div>
//           <div>
//             <div>
//               <p className="newest-name">Farm Fresh Watermelon</p>
//             </div>
//             <div className="newest-ratings">
//               <img src={stars} alt="Ratings" />
//               <p className="twelve">(12)</p>
//             </div>
//             <div className="newest-price">
//                 <p>#1,000</p>
//                 <p className="pcs"> /Pcs</p>
//             </div>
//             <div className="plus-minus">
//               <button className="-">-</button>
//               <p className="two">2</p>
//               <button className="+">+</button>
//             </div>
//             <div>
//               <button className="cart-button">Add to Cart</button>
//             </div>
//           </div>
//         </div>

//         <div className="newest-fruit"
//         onMouseEnter={hoverPine2}
//         onMouseLeave={hoverPineOut2}
//         >
//           <div className="newest-img">
//             <img className="icon" src={whiteLove} alt="Love" />
//             <img className="newimg3" style={stylePine2} src={pineapple} alt="Coconut" />
//           </div>
//           <div>
//             <div>
//               <p className="newest-name">Farm Fresh Pineapple</p>
//             </div>
//             <div className="newest-ratings">
//               <img src={stars} alt="Ratings" />
//               <p className="twelve">(12)</p>
//             </div>
//             <div className="newest-price">
//                 <p>#1,000</p>
//                 <p className="pcs"> /Pcs</p>
//             </div>
//             <div className="plus-minus">
//               <button className="-">-</button>
//               <p className="two">2</p>
//               <button className="+">+</button>
//             </div>
//             <div>
//               <button className="cart-button">Add to Cart</button>
//             </div>
//           </div>
//         </div>

//         <div className="newest-fruit"
//         onMouseEnter={hoverPawpaw2}
//         onMouseLeave={hoverPawpawOut2}
//         >
//           <div className="newest-img">
//             <img className="icon" src={whiteLove} alt="Love" />
//             <img className="newimg4" style={stylePawpaw2} src={pawpaw} alt="Coconut" />
//           </div>
//           <div>
//             <div>
//               <p className="newest-name">Farm Fresh Pawpaw</p>
//             </div>
//             <div className="newest-ratings">
//               <img src={stars} alt="Ratings" />
//               <p className="twelve">(12)</p>
//             </div>
//             <div className="newest-price">
//                 <p>#1,000</p>
//                 <p className="pcs"> /Pcs</p>
//             </div>
//             <div className="plus-minus">
//               <button className="-">-</button>
//               <p className="two">2</p>
//               <button className="+">+</button>
//             </div>
//             <div>
//               <button className="cart-button">Add to Cart</button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div>
//         <button className="view">View More</button>
//       </div>

return (
      <>
      <p>Newest Arrival</p>
      <div className="newproduct">
        {product.map((props) => (
          <Prods data={props}/>)
        )}
      </div>
    </>
  );
}

export default NewestArrival;
