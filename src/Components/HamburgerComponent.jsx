// import React, { useState } from 'react';
// import {
//   MDBContainer,
//   MDBCollapse,
//   MDBNavbar,
//   MDBNavbarToggler,
//   MDBIcon,
//   MDBBtn,
// } from 'mdb-react-ui-kit';

// export default function App() {
//   const [showNavExternal3, setShowNavExternal3] = useState(false);

//   return (
//     <>
//       <MDBNavbar>
//         <MDBContainer fluid>
//           <MDBNavbarToggler
//             className='ms-auto'
//             type='button'
//             data-target='#navbarToggleExternalContent'
//             aria-controls='navbarToggleExternalContent'
//             aria-expanded='false'
//             aria-label='Toggle navigation'
//             onClick={() => setShowNavExternal3(!showNavExternal3)}
//           >
//             <MDBIcon icon='bars' fas />
//           </MDBNavbarToggler>
//         </MDBContainer>
//       </MDBNavbar>

//       <MDBCollapse show={showNavExternal3}>
//         <div className='bg-light shadow-3 p-4'>
//           <MDBBtn block className='border-bottom m-0' color='Home'>
//             Link 1
//           </MDBBtn>
//           <MDBBtn block className='border-bottom m-0' color='Product Page'>
//             Link 2
//           </MDBBtn>
//           <MDBBtn block className='border-bottom m-0' color='Cart Page'>
//             Link 2
//           </MDBBtn>
//         </div>
//       </MDBCollapse>
//     </>
//   );
// }