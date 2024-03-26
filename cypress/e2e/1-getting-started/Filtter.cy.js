/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
      cy.visit('https://stacksinfo.web.app/');
  });

  it('verify Select Topic DBA', () => {
    cy.contains('span', 'Show Filters').click();
    cy.get('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').eq(1).click();
    cy.get('p.title-not-fround:contains("Oops, No Matches Found :(")').should('have.text', 'Oops, No Matches Found :(');

  });
  it('verify Select Tow Topic  DBA , Backend', () => {
    cy.contains('span', 'Show Filters').click();
    cy.get('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').eq(0).click();
    cy.get('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').eq(1).click();
    cy.get('p.title-not-fround:contains("Oops, No Matches Found :(")').should('have.text', 'Oops, No Matches Found :(');

  });
  it('verify Select multy Topic and deselect one topic ', () => {
    cy.contains('span', 'Show Filters').click();
    cy.get('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').eq(0).click();
    cy.get('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').eq(1).click();
    cy.get('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').eq(2).click();
    cy.get('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').eq(1).click();
    cy.get('p.title-not-fround:contains("Oops, No Matches Found :(")').should('have.text', 'Oops, No Matches Found :(');

  });

  it('verify Rest button ', () => {
    cy.contains('span', 'Show Filters').click();
    cy.get('.reset-btn').click();
    cy.get('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').eq(1).should('not.be.checked');
  });
  it('verfy Hide Button whith topic', () => {
    cy.contains('span', 'Show Filters').click();
    cy.get('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').eq(1).click();
    cy.contains('span', 'Hide Filters').click();
    cy.contains('span', 'Show Filters').should('be.visible');


  });
  it('verfy Hide Button ', () => {
    cy.contains('span', 'Show Filters').click();
    cy.contains('span', 'Hide Filters').click();
    cy.contains('span', 'Show Filters').should('be.visible');


  });
  it('verfy Hide Button whith Suptopic', () => {
    cy.contains('span', 'Show Filters').click();
    cy.contains('span', 'DBA').click(); 
    cy.get('#MySQL').click(); 
    cy.contains('span', 'Hide Filters').click();
    cy.contains('span', 'Show Filters').should('be.visible');


  });
  it('verfy remove Suptopic via CloseIcon', () => {
    cy.contains('span', 'Show Filters').click();
    cy.contains('span', 'DevOps').click(); 
    cy.get('label[for="AWS"]').click(); 
    cy.get('label[for="Azure"]').click();
    cy.get('[data-testid="CloseIcon"]').eq(0).click(); 
    cy.contains('div.company-name', 'Radix Technologies').should('be.visible');
  });

  it('verify that the user can choose topic and deselect subtopic From the Menu and Checkbox', () => {
    cy.contains('span', 'Show Filters').click(); 
    cy.get('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').eq(1).click(); 
    cy.contains('span', 'DBA').click(); 
    cy.get('#MySQL').click(); 
    cy.get('#MySQL').should('not.be.checked'); 
});
it('verify that the user can choose topic and deselect subtopic From the Menu and Checkbox', () => {
  cy.contains('span', 'Show Filters').click(); 
  cy.get('input.PrivateSwitchBase-input.css-1m9pwf3[type="checkbox"][data-indeterminate="false"]').eq(1).click(); 
  cy.get('.clear-all-btn').click();
  cy.get('.company-name').first().should('be.visible');
});

});
