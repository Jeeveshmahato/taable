import React from 'react';

const UserRow = ({ user, deleteUser, selectUser }) => {
  return (
    <tr>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.age}</td>
      <td>{user.gender}</td>
      <td>{user.city}</td>
      <td>
        <button onClick={() => selectUser(user)}>Edit</button>
        <button onClick={() => deleteUser(user.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default UserRow;
