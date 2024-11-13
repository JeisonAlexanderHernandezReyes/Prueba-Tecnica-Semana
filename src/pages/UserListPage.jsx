import React, { useEffect, useState } from 'react';
import { fetchUsers } from '../services/userService';

const UserListPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white rounded shadow p-2 text-center">
            <img src={user.picture} alt={user.firstName} className="w-full h-24 object-cover rounded" />
            <p className="mt-2">
              {user.firstName} {user.lastName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListPage;
