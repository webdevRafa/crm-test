import { collection, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig';

interface User {
  email: string;
  firstName: string;
  lastName: string;
}
export const getUsersRealtime = (callback: (users: User[]) => void): (() => void) => {
    const usersCollection = collection(db, 'users');
    const unsubscribe = onSnapshot(usersCollection, (snapshot) => {
      const userList = snapshot.docs.map(doc => doc.data() as User);
      callback(userList);
    });
    return unsubscribe;
  };

export const deleteUser = async (email: string): Promise<void> => {
    const userDoc = doc(db, 'users', email);
    await deleteDoc(userDoc);
};