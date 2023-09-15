import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/home/Homepage";
import BookingPage from "./components/pages/bookings/ReservationPage";
import ConfirmationPage from "./components/pages/bookings/ConfirmationPage";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
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
