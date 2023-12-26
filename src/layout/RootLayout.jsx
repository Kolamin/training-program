import { NavLink, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAuth } from "../use-hooks/use-auth";
import { removerUser } from "../store/slices/userSlice";

const RootLayout = () => {
  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();
  return (
    <div className="root-layoyt">
      <header>
        <nav>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="themes">Темы</NavLink>
          <NavLink to="about">О нас...</NavLink>
          {!isAuth ? (
            <NavLink to="login">Войти</NavLink>
          ) : (
            <button onClick={() => dispatch(removerUser())}>
              Выйти из {email}
            </button>
          )}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
