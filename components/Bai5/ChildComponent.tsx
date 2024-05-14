import { FC } from 'react';
interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }
  
interface ChildComponentProps {
    product: Product;
}

const ChildComponent: FC<ChildComponentProps> = ({ product }) => {
    return (
      <div>
        <h2>Child Component</h2>
        <p><strong>ID:</strong> {product.id}</p>
        <p><strong>Name:</strong> {product.name}</p>
        <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
        <p><strong>Quantity:</strong> {product.quantity}</p>
      </div>
    );
}
export default ChildComponent;