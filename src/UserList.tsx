import React, { useEffect, useState } from "react";
import { getUsersRealtime, deleteUser } from "./firestoreService";

interface User {
  email: string;
  firstName: string;
  lastName: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const unsubscribe = getUsersRealtime((users) => {
      setUsers(users);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleDelete = async (email: string) => {
    try {
      await deleteUser(email);
    } catch (error) {
      console.error("Error deleting user: ", error);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto w-[90%] max-w-[1200px] mt-10">
        <div>
          <h1 className="text-center text-2xl text-white mb-5 md:mb-0">
            current users
          </h1>
        </div>
        <div>
          {users.map((user) => (
            <div key={user.email}>
              <div className="flex items-center gap-1 mb-3 text-white">
                <button
                  className="bg-red px-1 transition duration-150 ease-in-out hover:bg-red-dark"
                  onClick={() => handleDelete(user.email)}
                >
                  Delete
                </button>
                {user.firstName} {user.lastName} - {user.email}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
