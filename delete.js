async function fetchDataFirestore() {
    const querySnapshot = await getDocs(collection, (db, "testColelction01"))
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id : doc.id, ...doc.data()})
    })
    return data;
  }
  
  function App() {
    const [termsData, setTermsData] = useState ([]);
  
    useEffect(() => {
      async function fetchData() {
        const data = await fetchDataFirestore();
        setTermsData(data);
      }
      fetchData();
    }, []);
  
    return (
      <div>
        <h1>Data from Firebase Firestore</h1>
        {termsData.map((terms) => (
          <p key={}></p>
        ))}
      </div>
    );
  }