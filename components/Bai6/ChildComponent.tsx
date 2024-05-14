import React from 'react';

export interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}

interface ChildComponentProps {
  users: User[];
}

const ChildComponent: React.FC<ChildComponentProps> = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h2>{user.name}</h2>
            <p>Address: {user.address}</p>
            <p>Email: {user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;