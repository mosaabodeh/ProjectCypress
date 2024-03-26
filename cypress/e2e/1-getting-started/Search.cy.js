/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('https://stacksinfo.web.app/')
  })

  it('Verify the Empty Search ', () => {
    cy.get('.search-bar').type('{enter}')
    .should('have.value', '');

  })
  it('Verify the Search with one Letter', () => {
    cy.get('.search-bar').type('a')
    .should('have.value', 'a');
    //cy.get('div.item-text:contains("ASAL Technologies")')
    cy.get('div.item-text:contains("a")')

  })
  it('Verify the Search with company name', () => {
    cy.get('.search-bar').type('ASAL Technologies')
    .should('have.value', 'ASAL Technologies');
    cy.get('div.item-text:contains("ASAL Technologies")');
    cy.get('.search-bar').type('{enter}');
    cy.get('div.company-name:contains("ASAL Technologies")')
    
  })
  it('Verify the Search with invailed company name', () => {
    cy.get('.search-bar').type('najah company')
    cy.get('.search-bar').type('{enter}');
    cy.get('p.title-not-fround:contains("Oops, No Matches Found :(")').should('have.text', 'Oops, No Matches Found :(');
  })
  it('Verify the Search with invailed company name(Spetial chars)', () => {
    cy.get('.search-bar').type('asal !@#4 Technologies')
    cy.get('.search-bar').type('{enter}');
    cy.get('p.title-not-fround:contains("Oops, No Matches Found :(")').should('have.text', 'Oops, No Matches Found :(');
  })
  it('Verify the Search with invailed company name(Diffrent Languge)', () => {
    cy.get('.search-bar').type('عسل')
    cy.get('.search-bar').type('{enter}');
    cy.get('p.title-not-fround:contains("Oops, No Matches Found :(")').should('have.text', 'Oops, No Matches Found :(');
  })
  it('Verify that the user Can Return to the Last Search)', () => {
    cy.get('.search-bar').type('ASAL Technologies').type('{enter}');
    cy.get('.search-bar').click();
    cy.get('div.item-text').should('contain', 'ASAL Technologies');

  })
  it('Verify that the user Can Clear Last Search)', () => {
    cy.get('.search-bar').type('najah company')
    cy.get('.search-bar').type('{enter}');
    cy.get('.search-bar').clear().click();
    cy.get('button.remove-button').eq(0).click();

  })
  it('Verify that the user Can Clear All Search)', () => {
    cy.get('.search-bar').type('ASAL Technologies').type('{enter}');
    cy.get('.search-bar').click();
    cy.contains('button.remove-button', 'Remove All').click();

  })

  
})
