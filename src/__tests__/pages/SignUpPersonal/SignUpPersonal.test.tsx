import React from "react";
import renderWithMockedProvider from "../../testHelper";
import { fireEvent, screen } from "@testing-library/react";
import SignUpPersonal from "../../../pages/signUpPersonal";
import { FormActionKind, initialFormState } from "@/components/SignupPersonal/SignUpReducer";
import formReducer from "@/components/SignupPersonal/SignUpReducer";

describe("Personal Sign Up Page", () => {
  it("should render personal signup page success", () => {
    renderWithMockedProvider(<SignUpPersonal />);
    expect(screen.getByText("Residential Address")).toBeInTheDocument();
  });
  test("should render personal signup page success", () => {
    renderWithMockedProvider(<SignUpPersonal />);
    expect(screen.getByText("Residential Address")).toBeInTheDocument();
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
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const phoneNumberInput = screen.getByLabelText("Phone number");
    const residentialAddressInput = screen.getByLabelText("Residential Address");
    const postcodeInput = screen.getByLabelText("Postcode");
    const stateInput = screen.getByLabelText("State");
    //Fire a native changeText event with a specific value
    fireEvent.change(firstNameInput, { target: { value: "Jane" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(phoneNumberInput, { target: { value: "0439493939" } });
    fireEvent.change(residentialAddressInput, { target: { value: "test" } });
    fireEvent.change(postcodeInput, { target: { value: "test" } });
    fireEvent.change(stateInput, { target: { value: "QLD" } });
    //Checking the rendered value
    expect(firstNameInput.value).toBe("Jane");
    expect(phoneNumberInput.value).toBe("0439493939");
    expect(residentialAddressInput.value).toBe("test");
    expect(postcodeInput.value).toBe("test");
    // FIXME: this is not right
    expect(stateInput.value).toBe("QLD");
  });
});
