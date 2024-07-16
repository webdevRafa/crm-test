import "./App.css";
import PremiumMembers from "./PremiumMembers";
import UserList from "./UserList";
import AddUserForm from "./addUserForm";

function App() {
  return (
    <>
      <AddUserForm />
      <UserList />
      <PremiumMembers />
    </>
  );
}

export default App;
