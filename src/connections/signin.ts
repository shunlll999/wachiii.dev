import firebase_app from "@/config/firebase.config";
import { COLLECTIONS } from "@/constants/collections";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import getDocumentByID from "./getData";

const auth = getAuth(firebase_app);

export default async function signIn(email: string, password: string) {
  let result = null,
    error = null;
  let userData = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
    const dataStore = result.user.toJSON()
    userData = await getDocumentByID(COLLECTIONS.USER_COLLECTION, result.user.uid);
    const store = {
      ...userData.result?.data(),
      cache: dataStore
    }
    localStorage.setItem(`!1::user-cache`, JSON.stringify(store));
    console.log('%c SIGN IN SUCCESS!', 'background: #222; color: #bada55');

  } catch (e: unknown) {
    error = (e as Error);
    console.log(`%c ERROR!: ${(error as any)?.code}`, 'background: #222; color: #f1374f');
  }
  return { result: userData?.result?.data(), error };
}
