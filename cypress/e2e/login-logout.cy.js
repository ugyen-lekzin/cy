describe('testing login and logout feature', () => {
    before(function ()  {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    })

    it('getting into the sigin page', () => {
        cy.get('#signin_button').click()
        cy.get('h3').should('be.visible').and('contain', 'Log in to ZeroBank')
    })

    it('login with invalid data', () => {
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.contains('Sign in').click()

        cy.get('.alert-error').should('be.visible').and('contain', 'Login and/or password are wrong.')
    })

    it('login with valid data', () => {
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.contains('Sign in').click()

        cy.get('h2').should('be.visible').and('contain', 'Cash Accounts')
    })

    it('testing logout', () => {
        cy.logout()
        cy.url().should('include', 'index.html')
    })
})