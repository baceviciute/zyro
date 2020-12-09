//added wait, the editor takes some time to load, test might fail
Cypress.Commands.add("clickOnEditWebsite", () => {
  cy.get('[data-qa="sites-btn-editwebsite-olivia.zyrosite.com-oving"').click();
  cy.wait(5000);
});
