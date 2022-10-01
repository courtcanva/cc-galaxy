import React from "react";
import renderWithMockedProvider, { createMockRouter } from "../../testHelper";
import user from "@testing-library/user-event";
import { fireEvent, screen, waitFor } from "@testing-library/react";
import Login from "../../../pages/login";
import customAxios from "../../../utils/axios";
import MockAdapter from "axios-mock-adapter";
import loginAction from "../../../components/Login/LoginAction";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("Login Page", () => {
  it("should render personal login page success", () => {
    renderWithMockedProvider(<Login />);
    expect(screen.getByText("CourtCanva")).toBeInTheDocument();
    expect(screen.getByText("Log in to CourtCanva Franchisee")).toBeInTheDocument();
  });
});

describe("Testing form validation", () => {
  it("should show warning", async () => {
    renderWithMockedProvider(<Login />);
    const usernameInput = screen.getByRole("username");
    const passwordInput = screen.getByRole("password");
    const submitBtn = screen.getByText("Login");
    user.click(submitBtn);

    await waitFor(() => expect(screen.getByText("Username is required")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Password is required")).toBeInTheDocument());

    fireEvent.change(usernameInput, { target: { value: "123@123.com" } });
    fireEvent.change(passwordInput, { target: { value: "123qweASD=" } });
  });
});

const mock = new MockAdapter(customAxios, { onNoMatch: "throwException" });
const account = { username: "vvv@v.com", password: "123qweASD=" };

beforeAll(() => {
  mock.reset();
});

describe("axios mocking test", () => {
  it("should call success", async () => {
    renderWithMockedProvider(
      <RouterContext.Provider value={createMockRouter({})}></RouterContext.Provider>
    );
    const { loginRequest } = loginAction();
    const res = await loginRequest(account.username, account.password);
    mock.onPost("/admin/login", account).reply(200, ["success"]);
    expect(res).toEqual(account);
  });
});
