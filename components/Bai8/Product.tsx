import React from 'react';

export interface ProductProps {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

const Product: React.FC<ProductProps> = ({ id, name, price, quantity }) => {
  return (
    <div key={id} className="product">
      <h2>{name}</h2>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default Product;