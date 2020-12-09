Cypress.Commands.add("visitZyro", () => {
  cy.clearCookies()
  cy.visit('https://zyro.com/trial');
  cy.viewport(1200, 660);
});

Cypress.Commands.add("clickSignInButton", () => {
  cy.get('[data-qa="header-link-signin"]').click();
});

Cypress.Commands.add("fillInEmail", (email) => {
  cy.get('[data-qa="signin-inputfield-emailaddress"]').type(email);
});

Cypress.Commands.add("fillInPassword", (password) => {
  cy.get('[data-qa="signin-inputfield-password"]').type(password);
});

Cypress.Commands.add("clickSignInOnSignIn", () => {
  cy.get('[data-qa="signin-btn-signin"]').click();
});

//added wait, the loading takes some time, test might fail
Cypress.Commands.add("signIn", (user) => {
  cy.clickSignInButton()
    .fillInEmail(user.email)
    .fillInPassword(user.password)
    .clickSignInOnSignIn()
    .wait(5000);
});

Cypress.Commands.add("clickUpdateWebsiteButton", () => {
  cy.get('[data-qa="builder-header-btn-publishsite"]').click();
});
