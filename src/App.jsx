// // import React from 'react';
// import PinterestGrid from './PinterestGrid';

// const images = [
//   {src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"},
//   {src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"},
//   {src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"},
//   {src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"},
//   {src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"},
//   {src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"},
//   {src: "https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387"},
 
//   // Add more image objects as needed
// ]

// const App = () => {
//   return (
//     <div>
//       <h1>Pinterest-style Image Grid</h1>
//       <PinterestGrid images={images} />
//     </div>
//   );
// }

// export default App;

// import React from 'react';
import PinterestGrid from './PinterestGrid';
import image1 from  "./assets/image1.jpeg"
import image2 from  "./assets/iamge2.jpeg"
import image3 from  "./assets/image3.jpeg"
import image4 from  "./assets/image4.jpeg"
import image8 from  "./assets/image8.jpeg"
import image6 from  "./assets/image6.jpeg"


const images = [
  {src: image3, },
  {src: image8},
  {src: image4},
  {src: image1},
  {src: image2},
  {src: image6},








  // Add more image objects as needed
];

const App = () => {
  return (
    <div >
      <div style={{
        height: "100vh",
        display: "flex",
        width: "100%",
        textAlign: 'center',
        justifyContent: "center",
        alignContent: "center",
        color:"black",
        fontSize: '2.5rem',
        position: 'absolute',

      }}>
        <h1 style={{

          // position: "absolute",
          // display: 'flex',
          // textAlign:'center',
          // justifyContent :'center',

          position: 'absolute',
          padding: "10px ",
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
           background: "rgba( 255, 255, 255, 0.25 )",
                  boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
                  backdropFilter: "blur( 0px )",
                  webkitBackdropFilter: 'blur( 0px )',
                  borderRadius: '10px',
                  border: '1px solid rgba( 255, 255, 255, 0.18 )'


        }}>Davao Photography Services</h1>
      </div>
      <PinterestGrid  images={images} />
    </div>
  );
}

export default App;





