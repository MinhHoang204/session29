import { Component } from 'react';

interface User{
  name: string,
  age: number;
  isMale: boolean;
}

export default class UserComponent extends Component<{props: string}, User> {
  render() {
    console.log(this.props);
    return (
      <div>
        {/* <h3>UserName: {this.state.name}</h3>
        <h3>Age: {this.state.age}</h3>
        <h3>Male: {this.state.isMale}</h3> */}
      </div>
    )
  }
}