/// <reference types="cypress" />

describe('Navigate to a product detail', () => {
  it('Opens the first product detail page', () => {
    cy.request('https://fakestoreapi.com/products')
    cy.visit('http://localhost:3000')
    cy.contains(/Fjallraven/i).click()
    cy.get('h1').should('have.text', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
    cy.contains('p', 'Price: 109.95')
  })
  it('Back to home page from the detail page', () => {
    cy.request('https://fakestoreapi.com/products')
    cy.visit('http://localhost:3000')
    cy.contains(/Fjallraven/i).click()
    cy.get('h1').should('have.text', 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops')
    cy.contains(/Home/i).click()
    cy.get('h1').should('have.text', 'Amazing products')  
  })
})


