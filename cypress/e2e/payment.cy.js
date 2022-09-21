describe('payment', () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    })

    it('login', () => {
        cy.get('#signin_button').click()
        cy.login('username', 'password')

        cy.get('#pay_bills_tab').click()
    })

    it('payment made using fake details', () => {
        cy.get('#sp_payee').select('bofa')
        cy.get('#sp_payee').should('have.value', 'bofa')
        cy.get('#sp_account').select('Checking')
        cy.get('#sp_amount').type('12345')
        cy.get('#sp_date').type('2020-10-01 {enter}')
        cy.get('#sp_description').type('hello how are you')
        cy.get('#pay_saved_payees').click()

        cy.get('h3').should('be.visible').and('contain', 'Log in to ZeroBank')
    })

})