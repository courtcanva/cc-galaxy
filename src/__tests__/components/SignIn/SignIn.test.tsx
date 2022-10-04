import React from "react";
import renderWithMockedProvider from "../../testHelper";
import user from "@testing-library/user-event";
import { fireEvent, renderHook, screen, waitFor } from "@testing-library/react";
import SignIn from "../../../pages/sign-in";
import customAxios from "../../../utils/axios";
import MockAdapter from "axios-mock-adapter";
import userSignIn from "../../../components/SignIn/useSignIn";
import { act } from "react-dom/test-utils";

describe("Sign in Page", () => {
  it("should render personal sign in page success", () => {
    renderWithMockedProvider(<SignIn />);
    expect(screen.getByText("CourtCanva")).toBeInTheDocument();
    expect(screen.getByText("Sign in to CourtCanva Franchisee")).toBeInTheDocument();
  });

  it("should show warning", async () => {
    renderWithMockedProvider(<SignIn />);
    const submitBtn = screen.getByText("Sign In");
    user.click(submitBtn);

    await waitFor(() => expect(screen.getByText("Username is required")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Password is required")).toBeInTheDocument());
  });

  it("should form submit", async () => {
    renderWithMockedProvider(<SignIn />);
    const submitBtn = screen.getByText("Sign In");
    const usernameInput = screen.getByRole("username");
    const passwordInput = screen.getByRole("password");
    fireEvent.change(usernameInput, { target: { value: "123@123.com" } });
    fireEvent.change(passwordInput, { target: { value: "123qweASD=" } });
    user.click(submitBtn);
    await waitFor(() => expect(screen.getByRole("status")).toBeInTheDocument());
  });

  const mock = new MockAdapter(customAxios, { onNoMatch: "throwException" });
  const account = { username: "vvv@v.com", password: "123qweASD=" };

  beforeAll(() => {
    mock.reset();
  });

  it("should call success", async () => {
    mock.onPost("/staff/signin", account).reply(200, account);
    const { result } = renderHook(() => userSignIn());

    act(() => {
      result.current.handleSignInSubmit(account);
    });
    await waitFor(() => expect(result.current.isLoading).toBe(true));
  });

  it("should call error", async () => {
    mock.onPost("/staff/signin", account).reply(400, account);
    const { result } = renderHook(() => userSignIn());

    act(() => {
      result.current.handleSignInSubmit(account);
    });
    await waitFor(() => expect(result.current.isLoading).toBe(true));
  });
});
