import { collection, onSnapshot, deleteDoc, doc, getDoc, setDoc } from 'firebase/firestore';
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

export const moveUserToPremium = async (email: string): Promise<void> => {
    const userDoc = doc(db, 'users', email);
    const userSnap = await getDoc(userDoc);

    if (userSnap.exists()) {
        const userData = userSnap.data() as User;
        const premiumUserDoc = doc(db, 'premiumMembers', email);
        await setDoc(premiumUserDoc, userData);
        await deleteDoc(userDoc);
    } else {
        throw new Error("Users not found");
    }
};


export const getPremiumMembersRealtime = (callback: (users: User[]) => void): (() => void) => {
    const premiumMembersCollection = collection(db, 'premiumMembers');
    const unsubscribe = onSnapshot(premiumMembersCollection, (snapshot) => {
        const userList = snapshot.docs.map(doc => doc.data() as User);
        callback(userList);
    });
    return unsubscribe;
}

export const moveUserToRegular = async (email: string): Promise<void> => {
    const premiumUserDoc = doc(db, 'premiumMembers', email);
    const userSnap = await getDoc(premiumUserDoc);
  
    if (userSnap.exists()) {
      const userData = userSnap.data() as User;
      const regularUserDoc = doc(db, 'users', email);
      console.log('User data:', userData);
      await setDoc(regularUserDoc, userData);
      await deleteDoc(premiumUserDoc);
      console.log('User moved to regular successfully');
    } else {
      console.log('User not found in premiumMembers collection');
      throw new Error("Premium user not found");
    }
  };