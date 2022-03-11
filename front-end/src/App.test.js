<<<<<<< HEAD
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("renders title", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const restaurant = screen.getByText(/periodic tables/i);
  expect(restaurant).toBeInTheDocument();
});
=======
import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "@testing-library/jest-dom/extend-expect";

test("renders title", () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const restaurant = screen.getByText(/periodic tables/i);
  expect(restaurant).toBeInTheDocument();
});
>>>>>>> c6842d8ce2a3a6fc2c01ee13f639b328a570eae5
