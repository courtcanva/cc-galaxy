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
});

describe("Testing onChange functions", () => {
  it("should update text", () => {
    // Rendering the component and its tree
    renderWithMockedProvider(<SignUpPersonal />);
    // Extracting the child, username_input component with his accessibilityLabel
    const firstNameInput: HTMLInputElement = screen.getByLabelText(
      "First Name"
    ) as HTMLInputElement;
    const lastNameInput: HTMLInputElement = screen.getByLabelText("Last Name") as HTMLInputElement;
    const phoneNumberInput: HTMLInputElement = screen.getByLabelText(
      "Phone number"
    ) as HTMLInputElement;
    const residentialAddressInput: HTMLInputElement = screen.getByLabelText(
      "Residential Address"
    ) as HTMLInputElement;
    const postcodeInput: HTMLInputElement = screen.getByLabelText("Postcode") as HTMLInputElement;
    const stateInput: HTMLInputElement = screen.getByLabelText("State") as HTMLInputElement;
    // Fire a native changeText event with a specific value
    fireEvent.change(firstNameInput, { target: { value: "Jane" } });
    fireEvent.change(lastNameInput, { target: { value: "Doe" } });
    fireEvent.change(phoneNumberInput, { target: { value: "0439493939" } });
    fireEvent.change(residentialAddressInput, { target: { value: "test" } });
    fireEvent.change(postcodeInput, { target: { value: "test" } });
    fireEvent.change(stateInput, { target: { value: "QLD" } });
    // Checking the rendered value
    expect(firstNameInput.value).toBe("Jane");
    expect(phoneNumberInput.value).toBe("0439493939");
    expect(residentialAddressInput.value).toBe("test");
    expect(postcodeInput.value).toBe("test");
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
    // Rendering the component and its tree
    renderWithMockedProvider(<SignUpPersonal />);
    const submitBtn = screen.getByText("Sign up");
    await user.click(submitBtn);

    // Checking the rendered value
    expect(screen.getByText("String must contain at least 1 character(s)")).toBeInTheDocument();
    expect(screen.getByText("The Phone Number does not match required format")).toBeInTheDocument();
    expect(screen.getByText("The Postcode does not match the required format")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Invalid enum value. Expected 'QLD' | 'VIC' | 'NSW' | 'NT' | 'SA' | 'ACT' | 'TAS' | 'WA', received ''"
      )
    ).toBeInTheDocument();
  });
});
