import React, { useState, useEffect } from 'react';
import firebase from './Firebase'; // Import the Firebase instance
import 'firebase/firestore'; // Import Firestore
import UserRow from './UserRow';
import UserForm from './UserForm';

const db = firebase.firestore();

const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    // Fetch user data from Firestore
    const unsubscribe = db.collection('users').onSnapshot((snapshot) => {
      const usersData = [];
      snapshot.forEach((doc) => {
        usersData.push({ id: doc.id, ...doc.data() });
      });
      setUsers(usersData);
    });

    // Clean up the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const addUser = (user) => {
    db.collection('users').add(user);
  };

  const editUser = (updatedUser) => {
    db.collection('users').doc(updatedUser.id).update(updatedUser);
    setSelectedUser(null);
  };

  const deleteUser = (id) => {
    db.collection('users').doc(id).delete();
  };

  const selectUser = (user) => {
    setSelectedUser(user);
  };

  return (
    <div>
      <h1>User Table</h1>
      <UserForm addUser={addUser} editUser={editUser} selectedUser={selectedUser} />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Gender</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              selectUser={selectUser}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
