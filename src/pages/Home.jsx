import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../use-hooks/use-auth";
import { removerUser } from "../store/slices/userSlice";

export const Home = () => {
  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <h1>Темы для тренироки персонала ТГКОМ</h1>

      <button onClick={() => dispatch(removerUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <div>
      <Navigate replace to="/login" />
    </div>
  );
};
