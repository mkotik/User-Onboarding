describe("renders the home page", () => {
  it("renders correctly", () => {
    cy.visit("http://localhost:3000");
    cy.get("#wrap").should("exist");
  });
});
