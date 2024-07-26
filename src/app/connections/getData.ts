
import firebase_app from "@/config/firebase.config";
import { getFirestore, doc, getDoc, getDocs, collection, DocumentData, DocumentSnapshot } from "firebase/firestore";
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

export const getDocuments = async (collectionName: string, callback: (list: ResultType[]) => void)  => {
  const colRef = await collection(db, collectionName)
  const docSnapshort = await getDocs(colRef)
  const docs: ResultType[] = []
  docSnapshort.forEach(async(item) => {
    const product_info = await getDoc(item.data().product_info)
    // console.log('product_info', product_info)
    item.data().product_info = product_info.data()
    const result = {
      ...item.data(),
      id: item.id,
      product_info: product_info.data() as { description: string }
    }
    docs.push(result as ResultType)
    callback(docs)
  })
}

export const getDocument = async (snapHort: any)  => await getDoc(snapHort)
