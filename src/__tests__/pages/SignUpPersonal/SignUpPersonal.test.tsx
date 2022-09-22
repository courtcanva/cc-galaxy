import React from "react";
import renderWithMockedProvider from "../../testHelper";
import { screen } from "@testing-library/react";
import SignUpPersonal from "../../../pages/signUpPersonal";

describe("Personal Sign Up Page", () => {
  it("should render personal signup page success", () => {
    renderWithMockedProvider(<SignUpPersonal />);
    expect(screen.getByText("residentialAddress")).toBeInTheDocument();
  });
});
