import renderWithMockedProvider from "../../testHelper";
import { screen, waitFor } from "@testing-library/react";
import SignUpFirstStep from "@/components/SignUp/SignUpFirstStep";
import userEvent from "@testing-library/user-event";
import SignUpForm from "@/components/SignUp/SignUpForm";

describe("SignUp", () => {
  // it("S", async () => {
  //   renderWithMockedProvider(<SignUpForm />);
  //   await waitFor(() => {
  //     const emailInputEl = screen.getByRole("emailInput");
  //     const pwdInputEl = screen.getByRole("pwdInput");
  //     const repwdInputEl = screen.getByRole("repwdInput");
  //     expect(emailInputEl).toBeInTheDocument();
  //     expect(pwdInputEl).toBeInTheDocument();
  //     expect(repwdInputEl).toBeInTheDocument();
  //     expect(
  //       screen.getByText("Enter the email you would like to use as username")
  //     ).toBeInTheDocument();
  //   });
  // });

  it("Should display email, pwd, re-pwd inputs", async () => {
    renderWithMockedProvider(<SignUpFirstStep buttonStatus={() => void {}} />);

    await waitFor(() => {
      const emailInputEl = screen.getByRole("emailInput");
      const pwdInputEl = screen.getByRole("pwdInput");
      const repwdInputEl = screen.getByRole("repwdInput");
      expect(emailInputEl).toBeInTheDocument();
      expect(pwdInputEl).toBeInTheDocument();
      expect(repwdInputEl).toBeInTheDocument();
      expect(
        screen.getByText("Enter the email you would like to use as username")
      ).toBeInTheDocument();
    });
  });

  it("Should display email FormErrorMessage", async () => {
    renderWithMockedProvider(<SignUpFirstStep buttonStatus={() => void {}} />);

    await waitFor(() => {
      const emailInputEl = screen.getByRole("emailInput");
      userEvent.type(emailInputEl, "222gmail.com");
      userEvent.tab();
      expect(screen.getByText("Your email's format is invalid")).toBeInTheDocument();
    });
  });

  it("Should display pwd FormErrorMessage", async () => {
    renderWithMockedProvider(<SignUpFirstStep buttonStatus={() => void {}} />);

    await waitFor(() => {
      const pwdInputEl = screen.getByRole("pwdInput");
      userEvent.click(pwdInputEl);
      expect(
        screen.getByRole("pwdErrorMessage")
        // screen.getByText(
        //   "Use 8 or more characters with a combination of letters, numbers and symbols"
        // )
      ).toBeInTheDocument();
    });
  });

  it("Should display repwd FormErrorMessage", async () => {
    renderWithMockedProvider(<SignUpFirstStep buttonStatus={() => void {}} />);

    await waitFor(() => {
      const repwdInputEl = screen.getByRole("repwdInput");
      userEvent.click(repwdInputEl);
      expect(
        screen.getByRole("repwdErrorMessage")
        // screen.getByText(
        //   "Use 8 or more characters with a combination of letters, numbers and symbols"
        // )
      ).toBeInTheDocument();
    });
  });
});
