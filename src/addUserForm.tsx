import React, { useState } from "react";
import { addUser } from "./addUser"; // Adjust the path as needed

const AddUserForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addUser({ email, firstName, lastName });
    // clear the input fields after successful submission
    setEmail("");
    setFirstName("");
    setLastName("");
  };

  return (
    <>
      <div className="mx-auto w-[90%] max-w-[1200px] mt-20">
        <h1 className="text-white mb-2">
          This will add a user to Firestore DB Collection 'users'
        </h1>
      </div>
      <div className="bg-blue-med w-[90%] max-w-[1200px] py-12 mx-auto flex justify-center rounded-lg shadow-lg">
        <form
          className="flex flex-col gap-2 md:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
          <button
            className="bg-teal px-3 hover:bg-teal-dark transition duration-150 ease-in-out"
            type="submit"
          >
            Add User
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUserForm;
