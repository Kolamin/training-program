import RegisterPage from "./pages/RegisterPage";
import RootLayout from "./layout/RootLayout";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import ThemesPage from "./pages/ThemesPage";
import TestsPage from "./pages/TestsPage";
import "./styles/styles.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="themes" element={<ThemesPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
      <Route path="tests" element={<TestsPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
