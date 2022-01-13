// type definitions for Cypress object "cy"
/// <reference types="cypress" />

describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.get('div').contains('Yo');
  });
});
