import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import mainlogo from "./assets/Logo.svg";
import Homepage from "./components/Homepage";
import BookingPage from "./components/ReservationPage";
import ConfirmationPage from "./components/ConfirmationPage";
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
            <img src={mainlogo} alt="" />
          </Link>

          <ul className="leadtext">
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <a href="/#about" onClick={handleClick("about")}>
                About
              </a>
            </li>
            <li>
              <a href="/#menu" onClick={handleClick("menu")}>
                Menu
              </a>
            </li>
            <li>
              <Link to="/booking/bookingform" className="nav-item">
                Reservation
              </Link>
            </li>
            <li>
              <a href="" className="button secondary buttontxt">
                Order Online
              </a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/booking/bookingform" element={<BookingPage />}></Route>
        <Route
          path="/booking/confirmationpage"
          element={<ConfirmationPage />}
        ></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
