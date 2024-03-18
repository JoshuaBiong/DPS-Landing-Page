/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
// import React from 'react';
import Masonry from 'react-masonry-css';
import './PinterestGrid.css'; // Import CSS file for styling

const PinterestGrid = ( {images} ) => {
  // Breakpoints for reponsive layout
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      {images.map((image, index) => (
          <div key={index} className="image-item">
              <img src={image.src} alt={image.alt} />
          </div>
      ))}
    </Masonry>
  );
}

export default PinterestGrid;


// // import React from 'react';
// import './PinterestGrid.css'; // Import CSS file for styling

// const PinterestGrid = ({images}) => {
//   return (
//     <div className="pinterest-grid">
//   {images.map((image, index) => (
//         <div key={index} className="grid-item">
//           <img src={image.src} alt={image.alt} />
//         </div>
//       ))}
//     </div>
//   );
// }


// export default PinterestGrid;

