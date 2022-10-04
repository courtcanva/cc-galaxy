import React from "react";
import renderWithMockedProvider from "../../testHelper";
import { screen } from "@testing-library/react";
import AlertPop from "@/components/Common/AlertPop";

describe("Alert Pop", () => {
  it("should render alert pop successfully", () => {
    renderWithMockedProvider(<AlertPop title="Alert" />);
    expect(screen.getByText("Alert")).toBeInTheDocument();
  });
});
