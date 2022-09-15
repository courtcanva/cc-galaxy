import renderWithMockedProvider from "../testHelper";
import Layout from "../../layouts";
import Home from "../../pages";

describe("Header", () => {
  it("shoud render layout success", () => {
    renderWithMockedProvider(
      <Layout>
        <Home />
      </Layout>
    );
  });
});
