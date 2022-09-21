describe('testing the new payee ', () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')

    })

    it('signing', () => {
        cy.get('#signin_button').click()
        cy.login('username', 'password')
        cy.get('#pay_bills_tab').click()
        cy.get('a').contains('Add New Payee').click()
        cy.get('#np_new_payee_name').type('name')
        cy.get('#np_new_payee_address').type('address')
        cy.get('#np_new_payee_account').type('123456789')
        cy.get('#np_new_payee_details').type('detail')
        cy.get('#add_new_payee').click()

        cy.get('#alert_content')
            .should('be.visible')
            .and('contain', 'The new payee name was successfully created.')
    })
})