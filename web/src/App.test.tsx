import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import { render } from "@testing-library/react";
import App from "./App";

test("renders home page", () => {
  const { getByText } = render(
    <MockedProvider>
      <App />
    </MockedProvider>
  );
  const linkElement = getByText(/Austin Data/i);
  expect(linkElement).toBeInTheDocument();
});