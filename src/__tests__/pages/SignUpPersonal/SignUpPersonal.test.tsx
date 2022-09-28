import React from "react";
import renderWithMockedProvider from "../../testHelper";
import user from "@testing-library/user-event";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import SignUpPersonal from "../../../pages/sign-up";
import SignUpForm from "@/components/SignupPersonal/SignUpForm";

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

describe("Testing Sign Up Form", () => {
  it("should render form", () => {
    renderWithMockedProvider(<SignUpForm isLoggedIn={false} />);
    expect(screen.getByText("Residential Address")).toBeInTheDocument();
  });
  it("should render prompt", () => {
    renderWithMockedProvider(<SignUpForm isLoggedIn={true} />);
    expect(screen.getByText("You have already logged in")).toBeInTheDocument();
  });
});

describe("Testing form validation", () => {
  it("should show warning", async () => {
    //Rendering the component and its tree
    renderWithMockedProvider(<SignUpPersonal />);
    //Extracting the child, username_input component with his accessibilityLabel
    const firstNameInput = screen.getByLabelText("First Name");
    const lastNameInput = screen.getByLabelText("Last Name");
    const phoneNumberInput = screen.getByLabelText("Phone number");
    const residentialAddressInput = screen.getByLabelText("Residential Address");
    const postcodeInput = screen.getByLabelText("Postcode");
    const stateInput = screen.getByLabelText("State");
    const submitBtn = screen.getByText("Sign up");
    //Fire a native changeText event with a specific value
    fireEvent.change(firstNameInput, { target: { value: "Jane" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(phoneNumberInput, { target: { value: "0439493939" } });
    fireEvent.change(residentialAddressInput, { target: { value: "test" } });
    fireEvent.change(postcodeInput, { target: { value: "test" } });
    fireEvent.change(stateInput, { target: { value: "QLD" } });
    await waitFor(() => user.click(submitBtn));

    //Checking the rendered value
    expect(screen.getByText("String must contain at least 1 character(s)")).toBeInTheDocument();
    expect("The Phone Number does not match required format").toBeInTheDocument();
    expect("The Postcode does not match the required format").toBeInTheDocument();
    expect(
      "Invalid enum value. Expected 'QLD' | 'VIC' | 'NSW' | 'NT' | 'SA' | 'ACT' | 'TAS' | 'WA', received ''"
    ).toBeInTheDocument();
  });
});
