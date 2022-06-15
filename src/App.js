import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import About from "./pages/About";
import Posts from "./pages/Posts";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
        <Route path="*" element={<Navigate to="/" replace />}
    />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
