import firebase_app from "@/config/firebase.config"
import { COLLECTIONS } from "@/constants/collections"
import { addDoc, collection, doc, getDocs, getFirestore } from "firebase/firestore"
import { getDocument } from "./getData"

const db = getFirestore(firebase_app)
export const createPort = async (portData: any)  => {
  const collectionRef =collection(db, COLLECTIONS.PORTFOLIOS_COLLECTION);
  const addedData = await addDoc(collectionRef, {
    ...portData
  })

  const document = await getDocument(addedData)
  return document.data()
}

export const getPorts = async ()  => {
  const collectionRef =collection(db, COLLECTIONS.PORTFOLIOS_COLLECTION);
  const docSnapshort = await getDocs(collectionRef)
  return docSnapshort.docs.map((doc) => doc.data())
}

