import logo from "./logo.svg";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// initialization
const app = initializeApp(firebaseConfig);
const db = getFirestore();

// do all of this in a useEffect so it only runs once
const docRef = await addDoc(collection(db, "users"), {
  first: "Ada",
  last: "Lovelace",
  born: 1815,
});

console.log("Document writting with ID: ", docRef.id);

const docRef2 = await addDoc(collection(db, "users"), {
  first: "Marcin",
  last: "Jaczynski",
  born: 2000,
});

console.log("Document writting with ID: ", docRef2.id);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Test Text Update
        </a>
      </header>
    </div>
  );
}

export default App;
