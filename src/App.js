import React from "react";
import Schema01 from "./includes/Schema01";
import Schema02 from "./includes/Schema02";
import Schema03 from "./includes/Schema03";

function App() {
  return (
    <>
      <h1>Data from Firebase Firestore</h1>
      <h2>Collection: sortedTerms</h2>
      <hr/>

      <h3>Schema 01</h3>
      <Schema01 />
      <hr/>

      <h3>Schema 02</h3>
      <Schema02 />
      <hr/>

      <h3>Schema 03</h3>
      <Schema03 />
      <hr/>
    </>
  );
}

export default App;
