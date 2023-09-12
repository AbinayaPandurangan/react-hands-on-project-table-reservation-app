import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookingPage from "./components/ReservationPage";
import Feature from "./components/feature";

test("Renders the HomePage heading", () => {
  render(
    <BrowserRouter>
      <Feature />
    </BrowserRouter>
  );
  const h1Element = screen.getByText("Little Lemon");
  expect(h1Element).toBeInTheDocument();
});

test("Renders the BookingForm heading", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const h1Element = screen.getByText("Reserve a Table");
  expect(h1Element).toBeInTheDocument();
});

describe("Booking page", () => {
  const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

  test("should not have default booking time options", async () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    const timeOptions = await screen.findAllByTestId("booking-time-option");

    expect(timeOptions.length).toEqual(1);
    timeOptions.forEach((timeOption) =>
      expect(timeOption.value).not.toMatch(timeFormat)
    );
  });

  test("should update available booking time options when changing booking date", async () => {
    render(
      <BrowserRouter>
        <BookingPage />
      </BrowserRouter>
    );

    const bookingDate = "2023-10-01";
    const dateInput = screen.getByLabelText(/Choose date*/);
    const initialTimeOptions = await screen.findAllByTestId(
      "booking-time-option"
    );
    fireEvent.change(dateInput, { target: { value: bookingDate } });
    fireEvent.blur(dateInput);
    const updatedTimeOptions = await screen.findAllByTestId(
      "booking-time-option"
    );

    expect(dateInput).toHaveValue(bookingDate);
    initialTimeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
    updatedTimeOptions.forEach((timeOption) =>
      expect(timeOption.value).toMatch(timeFormat)
    );
    expect(initialTimeOptions.length).not.toBe(updatedTimeOptions.length);
  });
});
