import "./assets/App.css";
import Header from "./components/UI/Header/Header.jsx";
import Footer from "./components/UI/Footer/Footer.jsx";
import Contact from "./components/UI/Contact/Contact.jsx";
import Project from "./components/UI/Project/Project.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <>
      <Header />
      <Footer />
      <Contact />
      <Project />
      <Outlet />
    </>
  );
}

export default App;
