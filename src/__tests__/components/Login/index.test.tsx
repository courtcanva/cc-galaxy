import React from "react";
import renderWithMockedProvider from "../../testHelper";
import { screen } from "@testing-library/react";
import Login from "../../../pages/login";

describe("Personal Log In Page", () => {
  it("should render login page success", () => {
    renderWithMockedProvider(<Login />);
    expect(screen.getByText("Log in to CourtCanva Admin")).toBeInTheDocument();
  });
  test("should render login page with success", () => {
    renderWithMockedProvider(<Login />);
    expect(screen.getByText("Log in to CourtCanva Admin")).toBeInTheDocument();
  });
});
