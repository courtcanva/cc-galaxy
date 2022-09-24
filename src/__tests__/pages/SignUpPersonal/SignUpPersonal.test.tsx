import React from "react";
import renderWithMockedProvider from "../../testHelper";
import { fireEvent, screen } from "@testing-library/react";
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

describe("Personal Sign Up Reducer", () => {
  it("should return empty", () => {
    const startAction = { type: FormActionKind.HANDLE_SIGNUP_INPUT };
    expect(formReducer({}, startAction)).toEqual({});
  });
  it("should match original state", () => {
    const startAction = { type: "RANDOM" };
    expect(formReducer(initialFormState, startAction)).toEqual(initialFormState);
  });
});

describe("Testing onChange functions", () => {
  it("should update text", () => {
    //Rendering the component and its tree
    renderWithMockedProvider(<SignUpPersonal />);
    //Extracting the child, username_input component with his accessibilityLabel
    // const usernameInput = screen.getByLabelText("password");
    const emailInput = screen.getByLabelText("email");
    //Fire a native changeText event with a specific value
    fireEvent.change(emailInput, { target: { value: "jane@doe.com" } });
    //Checking the rendered value
    expect(emailInput.value).toBe("jane@doe.com");
  });
});
