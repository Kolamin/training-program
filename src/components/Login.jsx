import { Form } from "./Form";
import { useDispatch } from "react-redux";
import { setUser } from "../store/slices/userSlice";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(() => {
        alert("Ошибка входа!");
      });

    onAuthStateChanged(auth, (user) => {
      console.log("user status changed: ", user);
    });
  };

  return <Form title="sign in" handleClick={handleLogin} />;
};

export { Login };
