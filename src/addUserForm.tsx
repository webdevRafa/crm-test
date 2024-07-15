import React, { useState } from "react";
import { addUser } from "./addUser"; // Adjust the path as needed

const AddUserForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await addUser({ email, firstName, lastName });
  };

  return (
    <>
      <div className="mx-auto w-[90%] max-w-[1200px] mt-20">
        <h1 className="text-teal">Add a User</h1>
      </div>
      <div className="bg-blue-med w-[90%] max-w-[1200px] py-12 mx-auto flex justify-center rounded-lg">
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
          <button className="bg-teal" type="submit">
            Add User
          </button>
        </form>
      </div>
    </>
  );
};

export default AddUserForm;
