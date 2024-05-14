import { Component } from 'react'
import ChildrenComp from './ChildrenComp';

interface Parent_CompState {
    name: string;
}

export default class ParentComp extends Component<{}, Parent_CompState> {
    constructor(props: {}) {
        super(props);
        this.state = {
          name: 'Nguyễn Minh Hoàng'
        };
    }
  render() {
    return (
        <div>
        <h1>Parent Component</h1>
        <ChildrenComp name ={this.state.name}/>
      </div>
    );
  }
}
