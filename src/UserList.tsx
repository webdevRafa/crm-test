import React, { useEffect, useState } from "react";
import { getUsersRealtime } from "./firestoreService";

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

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto w-[90%] max-w-[1200px] mt-10">
        <div>
          <h1 className="text-center text-2xl text-white mb-5 md:mb-0">
            current users
          </h1>
        </div>
        <div className="text-teal">
          {users.map((user) => (
            <div key={user.email}>
              {user.firstName} {user.lastName} - {user.email}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UserList;
