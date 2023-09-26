import React, { useState, useEffect } from 'react';

const UserForm = ({ addUser, editUser, selectedUser }) => {
  const [user, setUser] = useState({
    id: null,
    name: '',
    email: '',
    age: '',
    gender: '',
    city: '',
  });

  useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    } else {
      setUser({
        id: null,
        name: '',
        email: '',
        age: '',
        gender: '',
        city: '',
      });
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.id !== null) {
      // Editing an existing user
      editUser(user);
    } else {
      // Adding a new user
      addUser({ ...user, id: Date.now() });
    }

    setUser({
      id: null,
      name: '',
      email: '',
      age: '',
      gender: '',
      city: '',
    });
  };

  return (
    <div>
      <h2>{selectedUser ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="text"
          placeholder="Age"
          value={user.age}
          onChange={(e) => setUser({ ...user, age: e.target.value })}
        />
        <input
          type="text"
          placeholder="Gender"
          value={user.gender}
          onChange={(e) => setUser({ ...user, gender: e.target.value })}
        />
        <input
          type="text"
          placeholder="City"
          value={user.city}
          onChange={(e) => setUser({ ...user, city: e.target.value })}
        />
        <button type="submit">{selectedUser ? 'Update' : 'Add'}</button>
      </form>
    </div>
  );
};

export default UserForm;
