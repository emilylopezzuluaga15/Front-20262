import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App