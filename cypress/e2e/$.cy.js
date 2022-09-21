describe('using $ function in cypress', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/login.html')
    })

    it('$ function', () => {
        const signUp = Cypress.$('#signin_button')
        signUp.click()
    })
})