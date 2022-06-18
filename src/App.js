import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import "./styles/App.css";
import { routes } from "./router/routes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route
            element={<route.element/>}
            path={route.path}
            exact={route.exact}
            key={index}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
