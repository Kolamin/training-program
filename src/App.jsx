import { useEffect, useState } from "react";
import { colRef } from "./data";
import { getDocs } from "firebase/firestore";
import "./styles/styles.css";

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
      <div>
        {themes.map((theme) => {
          return (
            <div key={theme.id}>
              <h2>Тема: {theme.question} </h2>
              {theme.content.map((value, idx) => (
                <ul key={idx} data-tooltip={theme.executor[idx]}>
                  {theme.content.indexOf(value) + 1}. {value}
                </ul>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
