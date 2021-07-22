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

  it("Check if you can type an email into the email input", () => {
    emailInput()
      .should("have.value", "")
      .type("test@gmail.com")
      .should("have.value", "test@gmail.com");
  });

  it("Check if you can type a password into the password input", () => {
    passwordInput()
      .should("have.value", "")
      .type("testpass")
      .should("have.value", "testpass");
  });

  it("Can you check the checkbox?", () => {
    agreeInput().should("not.be.checked").check().should("be.checked");
  });

  it("Submitting form", () => {
    userCard().should("not.exist");
    submitBtn().should("be.disabled");
    nameInput().type("Marat Kotik");
    submitBtn().should("be.disabled");
    emailInput().type("mkotik97@gmail.com");
    submitBtn().should("be.disabled");
    passwordInput().type("testpass");
    submitBtn().should("be.disabled");
    agreeInput().check();
    submitBtn().should("exist").should("not.be.disabled").click();
    userCard().should("exist");
  });

  it("validation if name is blank", () => {
    nameInput().should("not.have.value");
    emailInput().type("mkotik97@gmail.com");
    passwordInput().type("testpass");
    agreeInput().check();
    submitBtn().should("be.disabled");
  });

  it("validation if email is blank", () => {
    emailInput().should("not.have.value");
    nameInput().type("Marat Kotik");
    passwordInput().type("testpass");
    agreeInput().check();
    submitBtn().should("be.disabled");
  });

  it("validation if password is blank", () => {
    passwordInput().should("not.have.value");
    nameInput().type("Marat Kotik");
    emailInput().type("mkotik97@gmail.com");
    agreeInput().check();
    submitBtn().should("be.disabled");
  });

  it("validation if terms of service not checked", () => {
    nameInput().type("Marat Kotik");
    emailInput().type("mkotik97@gmail.com");
    passwordInput().type("testpass");
    agreeInput().uncheck();
    submitBtn().should("be.disabled");
  });
});

const nameInput = () => cy.get("input[name='name']");
const emailInput = () => cy.get("input[name='email']");
const passwordInput = () => cy.get("input[name='password']");
const agreeInput = () => cy.get("input[name='agree']");
const submitBtn = () => cy.get("button[id='submitBtn']");
const userCard = () => cy.get("div[class='user']");
