import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

interface User {
  email: string;
  firstName: string;
  lastName: string;
}

const addUser = async (user: User) => {
  try {
    await setDoc(doc(db, "users", user.email), {
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
    });
    console.log("Document written with ID: ", user.email);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { addUser };