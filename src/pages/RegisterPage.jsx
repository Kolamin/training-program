import { SignUp } from "../components/SignUp";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div>
      <h1>Регистрация</h1>
      <SignUp />
      <p>
        Уже есть регистрация? <Link to="/login">Войти</Link>
      </p>
    </div>
  );
};

export default RegisterPage;
