import React, { useEffect, useState } from "react";
import {
  getPremiumMembersRealtime,
  moveUserToRegular,
} from "./firestoreService";
import { FaCrown } from "react-icons/fa6";

interface User {
  email: string;
  firstName: string;
  lastName: string;
}

const PremiumMembers: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const unsubscribe = getPremiumMembersRealtime((users) => {
      setUsers(users);
    });

    // cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleMoveToRegular = async (email: string) => {
    try {
      await moveUserToRegular(email);
    } catch (error) {
      console.error("Error moving user to regular: ", error);
    }
  };

  return (
    <>
      <div className="mx-auto w-[90%] max-w-[1200px] bg-white mt-20 rounded-lg shadow-md p-6">
        <div className="flex gap-1 justify-center">
          <h2 className="text-center text-2xl font-bold text-blue-light mb-5">
            Premium Members
          </h2>
          <FaCrown className="text-blue-light size-5" />
        </div>
        <div className="border-8 border-blue-dark  w-[75%] mx-auto py-10 px-2">
          {users.map((user) => (
            <div key={user.email} className="text-center font-bold mb-2">
              <div className="flex gap-2">
                <button
                  className="bg-red px-2 hover:bg-red-dark transition duration-150 ease-in-out"
                  onClick={() => handleMoveToRegular}
                >
                  Downgrade
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

export default PremiumMembers;
