import { useEffect, useState } from "react";
import { colRef } from "./data";
import { getDocs } from "firebase/firestore";

function App() {
  const [themes, setThemes] = useState([]);

  useEffect(() => {
    const getThemes = async () => {
      const data = await getDocs(colRef);
      setThemes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getThemes();
  }, []);

  console.log(themes);

  return (
    <div>
      {themes.map((theme) => {
        return (
          <div key={theme.id}>
            <h2>Вопрос: {theme.question} </h2>
            <div>
              {theme.content.map((value) => (
                <ul key={value}>
                  {theme.content.indexOf(value) + 1}. {value}
                </ul>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
