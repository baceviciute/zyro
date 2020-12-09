Cypress.Commands.add("selectGrid", (index) => {
  cy.get('[data-qa="builder-section-grid"]').eq(index).click();
});

//this should be rewritten in a reusable way
Cypress.Commands.add("selectFirstTextArea", () => {
  cy.get('[data-qa="builder-gridelement-text"]').eq(0).click();
});

Cypress.Commands.add("clickEditTextButton", () => {
  cy.get('[data-qa="builder-textelementedit-buttonedittext"]').click();
});

Cypress.Commands.add("addTextToATextSection", (text) => {
  cy.get('[data-qa="builder-gridelement-text"]').eq(0).type(text);
});
