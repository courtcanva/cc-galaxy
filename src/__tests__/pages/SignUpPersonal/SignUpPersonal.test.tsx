import React from "react";
import renderWithMockedProvider from "../../testHelper";
import { screen } from "@testing-library/react";
import SignUpPersonal from "../../../pages/signUpPersonal";
import { FormActionKind, initialFormState } from "@/components/SignupPersonal/SignUpReducer";
import formReducer from "@/components/SignupPersonal/SignUpReducer";

describe("Personal Sign Up Page", () => {
  it("should render personal signup page success", () => {
    renderWithMockedProvider(<SignUpPersonal />);
    expect(screen.getByText("residentialAddress")).toBeInTheDocument();
  });
  test("should render personal signup page success", () => {
    renderWithMockedProvider(<SignUpPersonal />);
    expect(screen.getByText("residentialAddress")).toBeInTheDocument();
  });
});

describe(" Personal Sign Up Reducer", () => {
  it("should return empty", () => {
    const startAction = { type: FormActionKind.HANDLE_SIGNUP_INPUT };
    expect(formReducer({}, startAction)).toEqual({});
  });
  it("should match original state", () => {
    const startAction = { type: "RANDOM" };
    expect(formReducer(initialFormState, startAction)).toEqual(initialFormState);
  });
});
