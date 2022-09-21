describe('select box', () => {
    it('drop down selection', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')

        cy.get('#preferred-interface').select('Both')
        cy.get('#preferred-interface').should('have.value', 'Both')

        cy.get('#preferred-interface').select('Command Line')
        cy.get('#preferred-interface').should('have.value', 'Command Line')
    })

    it('testing checkbox', () => {
        cy.get('#remote-testing').check()

        cy.get('#developer-name').type('bhutan {enter}')
        cy.get('#article-header').should('be.visible').and('contain', 'Thank you, bhutan !')
    })
})