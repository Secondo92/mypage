import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Navbar />
    <HomePage />
  </>
);
