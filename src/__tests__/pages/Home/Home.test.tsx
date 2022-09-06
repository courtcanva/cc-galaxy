import { renderWithMockedProvider } from "../../testHelper";
import Home from "@/pages/index";

describe("Home Page", () => {
  it("should render homepage success", () => {
    renderWithMockedProvider(<Home />);
  });
});
