import React from "react";
import renderWithMockedProvider from "../../testHelper";
import { screen } from "@testing-library/react";
import Home from "../../../pages";

describe("Home Page", () => {
  it("should render homepage success", () => {
    renderWithMockedProvider(<Home />);
    expect(screen.getByText("Welcome to CourtCanva")).toBeInTheDocument();
  });
});
