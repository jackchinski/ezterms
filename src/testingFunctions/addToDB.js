import { addDoc, collection } from "firebase/firestore";

async function addUserToFirebase(db) {
  try {
    const docRef = await addDoc(
      collection(db, "users", {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      })
    );
    console.log("Document added with ID: ", docRef.id);
  } catch (e) {
    console.log("addUserToFirebase: Failed with error: ", e);
  }
}

export { addUserToFirebase };
