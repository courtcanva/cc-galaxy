/* eslint-disable jest/no-commented-out-tests */
import React from "react";
import renderWithMockedProvider from "../../testHelper";
import user from "@testing-library/user-event";
import { screen, waitFor } from "@testing-library/react";
import Login from "../../../pages/login";
// import axios from "axios";
// import { environment } from "../../../constants/environment";
// import loginAction from "../../../components/Login/LoginAction";

describe("Login Page", () => {
  it("should render personal login page success", () => {
    renderWithMockedProvider(<Login />);
    expect(screen.getByText("CourtCanva")).toBeInTheDocument();
    expect(screen.getByText("Log in to CourtCanva Franchisee")).toBeInTheDocument();
  });
});

describe("Testing form validation", () => {
  // eslint-disable-next-line jest/no-focused-tests
  it("should show warning", async () => {
    const submitBtn = screen.getByText("Log in");
    user.click(submitBtn);
    await waitFor(() => expect(screen.getByText("Username is required")).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText("Password is required")).toBeInTheDocument());
  });
});

// jest.mock("axios");

// describe("fetchUsers", () => {
//   describe("when API call is successful", () => {
//     it.only("should return users list", async () => {
//       const { loginRequest } = loginAction();
//       // given
//       const user = { username: "vvv@v.com", password: "123qweASD=" };
//       (axios.post as jest.Mock).mockResolvedValue(user);
//       // when
//       const result = await loginRequest(user.username, user.password);
//       // then
//       expect(axios.get).toHaveBeenCalledWith(`${environment.API_BASE_URL}/users`);
//       expect(result).toEqual(user);
//     });
//   });
//   describe("when API call fails", () => {
//     it("should return empty users list", async () => {
//       // given
//       const { loginRequest } = loginAction();
//       const message = "Network Error";
//       (axios.post as jest.Mock).mockRejectedValueOnce(new Error(message));

//       // when
//       const result = await loginRequest("", "");

//       // then
//       expect(axios.get).toHaveBeenCalledWith(`${environment.API_BASE_URL}/users`);
//       expect(result).toEqual([]);
//     });
//   });
// });
