//didn't find one common test id
Cypress.Commands.add("expectToSeeWebsiteEditor", () => {
  cy.get('[data-qa="builder-section-navigation"]').should("be.visible");
  cy.get('[data-qa="builder-section-notnavigation"]').should("be.visible");
});

Cypress.Commands.add("expectToSeeText", (text) => {
  cy.get('[data-qa="builder-gridelement-text"]').eq(0).should("contain", text);
});
