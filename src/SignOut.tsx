import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebaseConfig";

const SignOut: React.FC = () => {
  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <div className="flex justify-end p-4">
      <button
        className="bg-white text-blue-dark font-bold px-1 shadow-lg"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default SignOut;
