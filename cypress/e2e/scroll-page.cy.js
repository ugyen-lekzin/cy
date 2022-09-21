describe('scroll into page', () => {
    it('scrolling down', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.get('#submit-button').scrollIntoView()
        cy.get('#submit-button').should('be.visible').and('contain', 'Submit')
        // cy.get('#comments').screenshot()
        cy.clearLocalStorage()
        cy.wait(3000)


    //    scrolling up
        cy.get('header').scrollIntoView()
        cy.get('header').should('be.visible').and('contain', 'Example')
        // cy.screenshot({ capture: 'fullPage'})
    })
})