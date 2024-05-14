import React from 'react';
import ChildComponent, { User } from './ChildComponent';

const ParentComponent: React.FC = () => {
  const users: User[] = [
    { id: 1, name: 'John Doe', address: '123 Main St', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', address: '456 Maple Ave', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', address: '789 Elm St', email: 'bob@example.com' },
  ];

  return (
    <div>
      <h1>User List</h1>
      <ChildComponent users={users} />
    </div>
  );
};

export default ParentComponent;