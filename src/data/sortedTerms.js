import { collection, getDocs } from "firebase/firestore";
import { db } from ".././firebase.config";

async function fetchDataFirestore() {
  try {
    const querySnapshot = await getDocs(collection(db, "sortedTerms"));
    
    if (querySnapshot.empty) {
      console.log("No documents found.");
      return [];
    }
    
    const data = [];
    querySnapshot.forEach(doc => {
      data.push(doc.data());
    });

    console.log("All documents data:", data);
    return data;
  } catch (error) {
    console.error("Error fetching data from Firestore:", error);
    throw error;
  }
}

// Export each item separately
export const firstSchema = async () => {
  const data = await fetchDataFirestore();
  return data[0];
};

export const secondSchema = async () => {
  const data = await fetchDataFirestore();
  return data[1];
};

export const thirdSchema = async () => {
  const data = await fetchDataFirestore();
  return data[2];
};
