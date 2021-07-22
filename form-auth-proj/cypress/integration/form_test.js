describe("renders the home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    // cy.get("#wrap").should("exist");
  });

  it("Check if you can type in Name Input", () => {
    nameInput()
      .should("have.value", "")
      .type("Test String")
      .should("have.value", "Test String");
  });
});

const nameInput = () => cy.get("input[name='name']");
const emailInput = () => cy.get("input[name='email']");
const passwordInput = () => cy.get("input[name='password']");
const agreeInput = () => cy.get("input[name='agree']");
