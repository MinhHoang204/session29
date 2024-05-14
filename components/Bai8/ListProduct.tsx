import React, { useState } from 'react';
import Product, { ProductProps } from './Product';

const ListProduct: React.FC = () => {
  const [products, setProducts] = useState<ProductProps[]>([
    { id: 1, name: 'Product A', price: 30, quantity: 10 },
    { id: 2, name: 'Product B', price: 20, quantity: 5 },
    { id: 3, name: 'Product C', price: 50, quantity: 20 },
]);

return (
    <div>
      <h1>Product List</h1>
      <div>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ListProduct;