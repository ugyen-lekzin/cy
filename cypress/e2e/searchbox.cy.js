describe("testing search box", () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('testing the search box ', () => {
        cy.get('#searchTerm').type('hello {enter}')
        cy.get('h2').should('be.visible').should('contain', 'Search Results:')
    })
})