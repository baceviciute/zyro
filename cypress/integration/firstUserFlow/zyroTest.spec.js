const user = {
  email: "baceviciuteg@gmail.com",
  password: "jirzej-sekry2-Buthyw",
}

describe('test', () => {
  before(() => {
    cy.clearCookies()
    cy.visit('https://zyro.com/trial')
  });

  beforeEach(() => {
    cy.viewport(1200, 660);
  });

  it('user should be able to log in when user enters valid email and password', () => {
    cy.get('[data-qa="header-link-signin"]').click();
    cy.get('[data-qa="signin-inputfield-emailaddress"]').type(user.email);
    cy.get('[data-qa="signin-inputfield-password"]').type(user.password);
    cy.get('[data-qa="signin-btn-signin"]').click();
    cy.wait(5000);
    cy.get('[data-qa="sites-list"]').should("be.visible");
    cy.get('[data-qa="site-hover-state"]').eq(1).should("be.visible");
    cy.get('[data-qa="sites-btn-editwebsite-olivia.zyrosite.com-oving"').click();
    cy.wait(5000);
    cy.get('[data-qa="builder-section-navigation"]').should("be.visible");
    cy.get('[data-qa="builder-section-notnavigation"]').should("be.visible");
    cy.get('[data-qa="builder-section-grid"]').eq(0).click();
    cy.get('[data-qa="builder-gridelement-text"]').eq(0).click();
    cy.get('[data-qa="builder-textelementedit-buttonedittext"]').click();
    cy.get('[data-qa="builder-gridelement-text"]').eq(0).type(" The BEST one!!!");
    cy.get('[data-qa="builder-section-grid"]').eq(0).click();
    cy.get('[data-qa="builder-header-btn-publishsite"]').click();
    cy.get('[data-qa="builder-publishmodal-btn-viewyoursite"]').should("be.visible");
  });



  // it('user should see previous work on \'Websites\' page', () => {
  //   cy.wait(5000);
  //   cy.get('[data-qa="sites-list"]').should("be.visible");
  //   cy.get('[data-qa="site-hover-state"]').eq(1).should("be.visible");
  // });
  //
  // it('user should be navigated to website editor when user taps on edit website', () => {
  //   cy.get('[data-qa="sites-btn-editwebsite-olivia.zyrosite.com-oving"').click();
  // });


  //edit view screen navigations' (Home, About..) id "builder-section-navigation"
  //edit view screen id "builder-section-notnavigation"
});
