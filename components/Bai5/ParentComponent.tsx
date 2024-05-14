import { Component } from 'react';
import ChildrenComp from '../Bai4/ChildrenComp';

interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}
  
interface ParentComponentState {
    product: Product;
}

export default class ParentComponent extends Component<{}, ParentComponentState> {
    constructor(props: {}) {
        super(props);
        this.state = {
          product: {
            id: 1,
            name: 'Sample Product',
            price: 99.99,
            quantity: 10
          }
        };
    }
  render() {
    return (
        <div>
        <h1>Parent Component</h1>
        <ChildrenComp product={this.state.product}/>
      </div>
    );
  }
}
