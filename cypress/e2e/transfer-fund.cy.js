describe('transfer funds', () => {

    before(function () {
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include', 'webappsecurity.com')
    })

    it('testing', () => {
        cy.get('#signin_button').click()
        cy.login('username', 'password')

        cy.get('#transfer_funds_tab').click()
        cy.get('#tf_fromAccountId')
            .select('Savings(Avail. balance = $ 1000)')
        cy.get('#tf_toAccountId')
            .select('Checking(Avail. balance = $ -500.2)')
        cy.get('#tf_amount').type('3200')
        cy.get('#tf_description').type('hello how are you')
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
    })

    it('validation of transfer funds', () => {
        cy.get('h2')
            .should('be.visible')
            .and('contain', 'Transfer Money & Make Payments - Confirm')
    })
})