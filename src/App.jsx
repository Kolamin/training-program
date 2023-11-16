import { useEffect, useState } from "react";

import { getDocs, query, where } from "firebase/firestore";
import "./styles/styles.css";
import Theme from "./components/Theme";
import { SelectThemes } from "./components/SelectThemes";

function App() {
  return (
    <div>
      <SelectThemes />
    </div>
  );
}

export default App;
