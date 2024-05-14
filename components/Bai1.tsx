import { Component } from 'react'
interface State {
    name: string;
}
  
export default class Bai1 extends Component<{}, State> {
    constructor(props: {}) {
        super(props);
        this.state = {
          name: 'Nguyễn Minh Hoàng'
        };
    }
  render() {
    return (
      <div>
        <h1>Hello, {this.state.name}!</h1>
      </div>
    );
  }
}
