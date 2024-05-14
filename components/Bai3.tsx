import { Component } from 'react'
interface Exercise03State{
    id: number,
    name: string,
    address: string,
}

export default class Bai3 extends Component<{}, Exercise03State> {
    constructor(props: {}) {
        super(props);
        this.state = {
          users: [
            { id: 1, name: 'User One', address: 'Address One' },
            { id: 2, name: 'User Two', address: 'Address Two' },
            { id: 3, name: 'User Three', address: 'Address Three' },
          ],
        };
      }
  render() {
    return (
        <div>
        <h1>User List</h1>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>
              <p><strong>ID:</strong> {user.id}</p>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Address:</strong> {user.address}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
