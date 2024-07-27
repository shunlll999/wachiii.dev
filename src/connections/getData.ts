
import firebase_app from "@/config/firebase.config";
import { getFirestore, doc, getDoc, getDocs, collection, DocumentData, DocumentSnapshot, QueryDocumentSnapshot } from "firebase/firestore";
import { CardDataType } from "../components/ui/comps/cards/recent";

type Override<Type, NewType> = Omit<Type, keyof NewType> & NewType;
export type ResultType = Override<CardDataType, {
  product_info: { description: string }
  id: string
}>

const db = getFirestore(firebase_app)
export default async function getDocumentByID(collection: string, id: string) {
  const docRef = doc(db, collection, id);
  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}

function pipeline(...funcs: any[]) {
  return async function(val: any) {
    for (let func of funcs) {
      val = await func(val);
    }
    return val.data();
  }
}

const replaceProductInfo = async (dataArray: QueryDocumentSnapshot<DocumentData, DocumentData>[]) => {
  const promises = dataArray.map(async (item) => await getDoc(item.data().product_info))
  const resolveProductInfo = await Promise.all(promises).then((data) => {
    const result = data.map((item) => item.data())
    return result
  })
  return dataArray.map((item, index) => ({ ...item.data(), id: item.id, product_info: resolveProductInfo[index] }))
}

export const getDocuments = async (collectionName: string)  => {
  const colRef = await collection(db, collectionName)
  const docSnapshort = await getDocs(colRef)
  const documents = await replaceProductInfo(docSnapshort.docs)
  return documents as ResultType[]
}

export const getUserDocuments = async (collectionName: string)  => {
  const colRef = await collection(db, collectionName)
  const docSnapshort = await getDocs(colRef)
  console.log(docSnapshort)
}

export const getDocument = async (snapHort: any)  => await getDoc(snapHort)
