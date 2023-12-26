import { Link } from "react-router-dom";
import { Login } from "../components/Login";
const LoginPage = () => {
  return (
    <div>
      <h1>Войти</h1>
      <Login />
      <p>
        или <Link to="/register">зарегистрироваться</Link>
      </p>
    </div>
  );
};

export default LoginPage;
