
import firebase_app from "@/config/firebase.config";
import { getFirestore, doc, getDoc, getDocs, collection, DocumentData, QueryDocumentSnapshot, DocumentReference } from "firebase/firestore";
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

const replaceProductInfo = async (
  docs: QueryDocumentSnapshot<DocumentData>[]
): Promise<ResultType[]> => {
  // ดึง ref ของ product_info ถ้ามี
  const productRefs = docs.map((d) => {
    const ref = d.get("product_info") as DocumentReference<DocumentData> | null | undefined;
    return ref ?? null;
  });

  // ดึงข้อมูล product_info แบบขนานและกัน null
  const productSnaps = await Promise.all(
    productRefs.map((ref) => (ref ? getDoc(ref) : Promise.resolve(null)))
  );

  // ประกอบผลลัพธ์คืน พร้อม id และ product_info ที่แปลงเป็น data() หรือ null
  return docs.map((d, i) => {
    const base = d.data();
    const snap = productSnaps[i];
    const product = snap && snap.exists() ? snap.data() : null;
    return { ...base, id: d.id, product_info: product } as ResultType;
  });
};

export const getDocuments = async (collectionName: string): Promise<ResultType[]>  => {
  const colRef = collection(db, collectionName)
  const docSnapshots = await getDocs(colRef)
  const documents = await replaceProductInfo(docSnapshots.docs)
  return documents
}

export const getUserDocuments = async (collectionName: string)  => {
  const colRef = await collection(db, collectionName)
  const docSnapshots = await getDocs(colRef)
  console.log('docSnapshots', docSnapshots);
}

export const getDocument = async (snapHort: any)  => await getDoc(snapHort)
