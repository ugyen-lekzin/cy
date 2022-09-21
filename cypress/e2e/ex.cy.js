describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://books.toscrape.com/')
    cy.url().should('include', 'toscrape.com')
    cy.log("I am before reload")
    cy.reload()
    cy.log("I am after reload")
  })

  it('first try', () => {
    cy.get('a').contains('Travel').click()
    cy.get('h1').should('be.visible')
    cy.get('.thumbnail').its('length').should('eq', 11)
  })

  it("assignment on udemy", () => {
    cy.get('li > a').contains('Poetry').click()
    cy.get('h1').should('be.visible')
    cy.get('.thumbnail').its('length').should('eq', 19)
  })
})