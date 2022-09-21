describe('testing forgot password', function () {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('testing the forgot password feature', () => {
        cy.get('#signin_button').click()
        cy.get('a').contains('Forgot your password ?').click()
        cy.get('#user_email').type('user@email.com')
        cy.get('.btn-primary').click()

        cy.get('h3').should('be.visible').and('contain', 'Forgotten Password')
    })
});