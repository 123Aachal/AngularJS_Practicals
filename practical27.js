// Create a new React app:

// 1 . npx prod-react-app prod-app
// cd calculator-app
// npm start


//2 . Create a pord.js component.

import React from "react";

const ProductPage = () => {
  const product = {name:"Phone", price:"$599", images:["https://via.placeholder.com/150"], reviews:["Good","Nice"]};
  return (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.price}</h2>
      {product.images.map((img,i)=><img key={i} src={img} alt="" />)}
      <h3>Reviews:</h3>
      <ul>{product.reviews.map((r,i)=><li key={i}>{r}</li>)}</ul>
      <button>Add to Cart</button>
    </div>
  );
};
export default ProductPage;
