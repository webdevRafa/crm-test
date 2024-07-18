import "./App.css";
import React from "react";
import { AuthProvider, useAuth } from "./AuthContext";

import PremiumMembers from "./PremiumMembers";
import SignIn from "./SignIn";
import UserList from "./UserList";
import AddUserForm from "./addUserForm";
import Header from "./Header";

const AppContent: React.FC = () => {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <>
          <Header />
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
