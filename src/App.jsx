import { useEffect, useState } from "react";
import { colAllThemes } from "./data";
import { getDocs, query, where } from "firebase/firestore";
import "./styles/styles.css";
import Theme from "./components/Theme";

function App() {
  const [themes, setThemes] = useState([]);
  const [month, setMonth] = useState("Все темы");

  /*  useEffect(() => {
    const getThemes = async (m) => {
      if (month === "All_themes") {
        const data = await getDocs(colAllThemes);
        setThemes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } else {
        const q = query(colAllThemes, where("month", "==", m));
        const data = await getDocs(q);
        setThemes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }
    };

    getThemes(month);
  }, [month]); */

  /*   const getThemes = async () => {
    const data = await getDocs(colAllThemes);
    setThemes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }; */

  const getThemes = async (month) => {
    if (month === "Все темы") {
      const data = await getDocs(colAllThemes);
      setThemes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } else {
      const q = query(colAllThemes, where("month", "==", month));
      const data = await getDocs(q);
      setThemes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
  };

  return (
    <div>
      <div className="button">
        <select value={month} onChange={(e) => setMonth(e.target.value)}>
          <option value="Все темы">Все темы</option>
          <option value="Январь">Январь</option>
          <option value="Февраль">Февраль</option>
          <option value="Март">Март</option>
          <option value="Апрель">Апрель</option>
          <option value="Май">Май</option>
          <option value="Июнь">Июнь</option>
          <option value="Июль">Июль</option>
          <option value="Август">Август</option>
          <option value="Сентябрь">Сентябрь</option>
          <option value="Октябрь">Октябрь</option>
          <option value="Ноябрь">Ноябрь</option>
          <option value="Декабрь">Декабрь</option>
        </select>
        <button onClick={() => getThemes(month)}>Выбрать тему</button>
      </div>

      <div className="question">
        <Theme themes={themes} />
      </div>
    </div>
  );
}

export default App;
