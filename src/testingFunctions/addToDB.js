import { addDoc, collection, getDocs } from "firebase/firestore";

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

async function readUserFromFirebase(db) {
  try {
    const querySnapshot = await getDocs(collection(db, "sortedTerms"));
    console.log("====DOCUMENT RETRIEVED FROM DB====");
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
    });


    //
      
    //
  } catch (e) {
    console.log("error: ", e);
  }
}

export { addUserToFirebase, readUserFromFirebase };
