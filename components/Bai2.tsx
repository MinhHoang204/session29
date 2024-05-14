import { Component } from 'react'
interface Exercise02State {
    id: number;
    name: string;
    dateOfBirth: string;
    address: string;
}

export default class Bai2 extends Component<{}, Exercise02State> {
    constructor(props: {}) {
        super(props);
        this.state = {
          id: 1,
          name: 'Nguyễn Minh Hoàng',
          dateOfBirth: '11-11-2004',
          address: 'Bắc Ninh',
        };
    }
  render() {
    return (
      const { id, name, dateOfBirth, address } = this.state;
      <div>
        <h1>Thông tin cá nhân</h1>
        <p><strong>ID:</strong> {id}</p>
        <p><strong>Tên:</strong> {name}</p>
        <p><strong>Ngày sinh:</strong> {dateOfBirth}</p>
        <p><strong>Địa chỉ:</strong> {address}</p>
      </div>
    );
  }
}
