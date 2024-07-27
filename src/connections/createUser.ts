import firebase_app from "@/config/firebase.config"
import { collection, getFirestore, addDoc, setDoc, doc } from "firebase/firestore"

export type MetaDataType = {
  createdAt: string;
  creationTime: string;
  lastLoginAt: string;
  lastSignInTime: string;
}

export type UserDataType = {
  metadata: MetaDataType;
  email: string;
  phoneNumber?: string;
  photoURL?: string;
  emailVerified: boolean;
  uid: string;
  role: string;
}


const db = getFirestore(firebase_app)
export const createUserDocument = async (collectionName: string, userData: UserDataType)  => {
  const metadata = { ...userData.metadata }
  const user = { ...userData, metadata }
  await setDoc(doc(db, collectionName, `${userData.uid}`), { ...user })
}
