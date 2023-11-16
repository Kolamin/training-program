import { Navigate } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Темы для тренироки персонала ТГКОМ</h1>
      <Navigate replace to="/login" />
    </div>
  );
};
