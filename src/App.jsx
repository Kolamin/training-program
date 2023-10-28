import { useEffect, useState } from "react";
import { colRef } from "./data";
import { getDocs } from "firebase/firestore";
import "./styles/styles.css";
import Theme from "./components/Theme";

function App() {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    const getThemes = async () => {
      const data = await getDocs(colRef);
      setThemes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getThemes();
  }, []);

  return (
    <div className="question">
      <Theme themes={themes} />
    </div>
  );
}

export default App;
