import React from "react";
import renderWithMockedProvider from "../../testHelper";
import user from "@testing-library/user-event";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from "../../../pages/login";
import customAxios from "../../../utils/axios";
import MockAdapter from "axios-mock-adapter";
import userLogin from "../../../components/Login/LoginAction";

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
    const submitBtn = screen.getByText("Login");
    user.click(submitBtn);

    await waitFor(() => expect(screen.getByText("Username is required")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Password is required")).toBeInTheDocument());
  });
});

const mock = new MockAdapter(customAxios, { onNoMatch: "throwException" });
const account = { username: "vvv@v.com", password: "123qweASD=" };
const { loginRequest } = userLogin();

beforeAll(() => {
  mock.reset();
});

describe("axios mocking test", () => {
  it("should call success", async () => {
    mock.onPost("/admin/login", account).reply(200, account);
    const res = await loginRequest(account.username, account.password);
    expect(res.data).toEqual(account);
  });
});
