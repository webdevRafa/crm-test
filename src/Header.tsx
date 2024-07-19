import React from "react";
import { useAuth } from "./AuthContext";
import SignOut from "./SignOut";

const Header: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className=" px-10 flex justify-between items-center p-4 bg-blue-500 text-white">
      <h2>
        Signed in as{" "}
        <span className="text-blue-dark font-bold bg-white shadow-lg p-1 rounded-md">
          {user?.email}
        </span>
      </h2>
      <SignOut />
    </div>
  );
};

export default Header;
