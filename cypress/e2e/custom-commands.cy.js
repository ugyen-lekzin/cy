describe('testing custom commands',  () =>  {
    it('custom command on login', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.login('username', 'password')

        cy.get('h2').should('be.visible').and('contain', 'Cash Accounts')
    })
});