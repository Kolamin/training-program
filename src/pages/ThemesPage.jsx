import React from "react";
import { Navigate } from "react-router-dom";
import { SelectThemes } from "../components/SelectThemes";
import { useAuth } from "../use-hooks/use-auth";


const ThemesPage = () => {
  const { isAuth } = useAuth();
  return isAuth ? (
    <div>
      <h1>Темы</h1>
      <SelectThemes />
    </div>
  ) : (
    <Navigate replace to="/login" />
  );
};

export default ThemesPage;
