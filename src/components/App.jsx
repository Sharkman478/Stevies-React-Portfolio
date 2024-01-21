import { useState } from "react";
import "./App.css";
import Header from "./components/UI/Header/Header.jsx";
import Nav from "./components/UI/Header/Navigation/Navigation.jsx";
import Footer from "./components/UI/Footer/Footer.jsx";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Footer />
      <useState />
    </>
  );
}

export default App;
