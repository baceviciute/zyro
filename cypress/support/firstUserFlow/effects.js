Cypress.Commands.add("expectToSeeSitesList", () => {
  cy.get('[data-qa="sites-list"]').should("be.visible");
});

Cypress.Commands.add("expectToSeeWorkItem", () => {
  cy.get('[data-qa="site-hover-state"]').eq(1).should("be.visible");
});
