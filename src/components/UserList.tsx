import * as React from 'react';
import useResources from '../hooks/useResources';
import { User } from '../types';

const UserList = () => {
  const users = useResources<User>('users');

  return (
    <ul>
      {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
};

export default UserList;