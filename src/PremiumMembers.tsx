import React, { useEffect, useState } from "react";
import {
  getPremiumMembersRealtime,
  moveUserToRegular,
} from "./firestoreService";
import { FaCrown } from "react-icons/fa6";
import { FaAngleDoubleDown } from "react-icons/fa";

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
      <div className="mx-auto w-[90%] max-w-[1200px] bg-blue-med mt-20 rounded-lg shadow-md p-6">
        <div className="flex gap-1 justify-center">
          <h2 className="text-center text-2xl font-bold text-white mb-5">
            Premium Members
          </h2>
          <FaCrown className="text-blue-light size-5" />
        </div>
        <div className="bg-blue-light mx-auto py-10 px-2 shadow-lg rounded-lg">
          {users.map((user) => (
            <div key={user.email} className="text-left font-bold mb-2">
              <div className="flex flex-row  md:items-center gap-2">
                <button
                  className="shadow-lg flex items-center bg-white px-2 hover:bg-red-dark transition duration-150 ease-in-out hover:text-white"
                  onClick={() => handleMoveToRegular(user.email)}
                >
                  <FaAngleDoubleDown className="text-red hover:text-white" />
                  Downgrade
                </button>
                <span className="text-white text-xs md:text-base font-med">
                  {user.firstName} {user.lastName} - {user.email}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PremiumMembers;
