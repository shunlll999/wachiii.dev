import firebase_app from "@/config/firebase.config";
import { createUserWithEmailAndPassword, getAuth, User } from "firebase/auth";
import { createUserDocument, UserDataType } from "./createUser";
import { COLLECTIONS } from "@/constants/collections";

const auth = getAuth(firebase_app);

export default async function signUp(email: string, password: string) {
  let result = null,
    error = null;
  try {
    result = await createUserWithEmailAndPassword(auth, email, password);
    const userData = {
      metadata: result.user.metadata,
      email: result.user.email,
      phoneNumber: result.user.phoneNumber || '',
      photoURL: result.user.photoURL || '',
      emailVerified: result.user.emailVerified,
      uid: result.user.uid,
      role: ''
    }
    createUserDocument(COLLECTIONS.USER_COLLECTION, userData as UserDataType);
  } catch (e) {
    error = e;
  }
  return { result, error };
}
