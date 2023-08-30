import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import mainlogo from "./assets/Logo.svg";
import Homepage from "./components/Homepage";
import BookingPage from "./components/BookingPage ";
import Footer from "./components/Footer";

function App() {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <nav>
        <div className="container">
          <Link to="/" className="nav-item">
            <img src={mainlogo} />
          </Link>

          <ul className="leadtext">
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <a href=" /#about" onClick={handleClick("about")}>
                About
              </a>
            </li>
            <li>
              <a href=" /#menu" onClick={handleClick("menu")}>
                Menu
              </a>
            </li>
            <li>
              <Link to="/booking" className="nav-item">
                Reservation
              </Link>
            </li>
            <li>
              <a href="">Order Online</a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking" element={<BookingPage />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
