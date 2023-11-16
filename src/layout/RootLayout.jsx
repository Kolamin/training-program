import { NavLink, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="root-layoyt">
      <header>
        <nav>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="themes">Темы</NavLink>
          <NavLink to="about">О нас...</NavLink>
          <NavLink to="login">Войти</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
