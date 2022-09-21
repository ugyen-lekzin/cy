describe("keyword press", () => {
    it("testing the search box", () => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#searchTerm').type('bhutan {enter}')

        cy.get('h2').should('be.visible').and('contain', 'Search Results:')
    })
})