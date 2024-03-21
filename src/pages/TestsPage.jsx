import React, { useEffect, useState } from 'react'
import { colAllThemes } from '../firebase'
import { getDocs, query, where } from 'firebase/firestore'
import Tests from '../components/Tests'
import "../styles/styles.css";

const TestsPage = () => {
const [tests, setTests] = useState([]);
const [month, setMonth] = useState("Все тесты");

useEffect(() => { }, [tests]);

const getThemes = async (month) => {
  if (month === "Все тесты") {
    const data = await getDocs(colAllThemes);
    setTests(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  } else {
    const q = query(colAllThemes, where("month", "==", month));
    const data = await getDocs(q);
    setTests(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
};

console.log(tests);

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
      <button onClick={() => getThemes(month)}>Тестирование</button>
    </div>

    <div>
      <Tests tests={tests}/>
    </div>
  </div>
);
}

export default TestsPage