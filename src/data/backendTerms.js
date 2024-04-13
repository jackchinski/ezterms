import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase.config";

async function fetchDataFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, "finalTerms"));
    
    if (querySnapshot.empty) {
      console.log("No documents found.");
      return [];
    }
    
    const data = [];
    querySnapshot.forEach(doc => {
      data.push(doc.data());
    });

    return data;
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    throw error;
  }
}

export const backendTerms = async () => {
  const data = await fetchDataFirestore();
  return data;
};

