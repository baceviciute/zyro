//didn't find test is on modal, using a button instead
Cypress.Commands.add("expectToSeeUpdatedWebsiteModal", () => {
  cy.get('[data-qa="builder-publishmodal-btn-viewyoursite"]').should("be.visible");
});
