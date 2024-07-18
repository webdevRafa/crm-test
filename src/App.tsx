import "./App.css";
import React from "react";
import { AuthProvider, useAuth } from "./AuthContext";

import PremiumMembers from "./PremiumMembers";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import UserList from "./UserList";
import AddUserForm from "./addUserForm";

const AppContent: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <SignOut />
          <AddUserForm />
          <UserList />
          <PremiumMembers />
        </>
      ) : (
        <SignIn />
      )}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
