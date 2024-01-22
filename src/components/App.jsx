import "./App.css";
import Header from "./components/UI/Header/Header.jsx";
import Nav from "./components/UI/Header/Navigation/Navigation.jsx";
import Footer from "./components/UI/Footer/Footer.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header>
        <Nav />
      </Header>
      <Footer />
    </>
  );
}

export default App;
