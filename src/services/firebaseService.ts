import { db } from "../firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

export const GetAllUsers = async () => {
  const usersCollectionRef = collection(db, "users");
  const data = await getDocs(usersCollectionRef);
  console.log(data);
};
