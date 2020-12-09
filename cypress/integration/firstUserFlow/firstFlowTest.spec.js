describe('edit and publish a website', () => {

  const user = {
    email: "baceviciuteg@gmail.com",
    password: "jirzej-sekry2-Buthyw",
  };

  it("user should be able to sign in", () => {
    cy.visitZyro()
      .signIn(user)
      .expectToSeeSitesList();
  });

  it("user should see previous work on 'Websites' page", () =>{
    cy.visitZyro()
      .signIn(user)
      .expectToSeeWorkItem();
  });

  it("user should be navigated to website editor when user clicks 'Edit website' button on existing project", () => {
    cy.visitZyro()
      .signIn(user)
      .clickOnEditWebsite()
      .expectToSeeWebsiteEditor();
  });

  it("user should be able to change an existing text when user selects an element and types in some text", () => {
    const text = ' this text was added by test';
    cy.visitZyro()
      .signIn(user)
      .clickOnEditWebsite()
      .selectGrid(0)
      .selectFirstTextArea()
      .clickEditTextButton()
      .addTextToATextSection(text)
      .selectGrid(0)
      .expectToSeeText(text);
  });

  it("user should be able to update the website when user click on 'Update website' button", () => {
    cy.visitZyro()
      .signIn(user)
      .clickOnEditWebsite()
      .clickUpdateWebsiteButton()
      .expectToSeeUpdatedWebsiteModal();
  });
});
