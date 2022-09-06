import { renderWithMockedProvider } from "../testHelper";
import Footer, { FooterContent } from "@/layouts/Footer";
import { screen } from "@testing-library/react";

describe("Footer", () => {
  it("shoud render footer success", () => {
    renderWithMockedProvider(<Footer />);
    expect(screen.getByText(FooterContent)).toBeInTheDocument();
  });
});
