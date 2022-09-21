describe('currency exchange', () => {
    before(function(){
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
    })

    it('login', () => {
        cy.get('#signin_button').click()
        cy.login('username', 'password')

        cy.get('#pay_bills_tab').click()
        cy.contains('Purchase Foreign Currency').click()
        cy.get('#pc_currency').select('Canada (dollar)')
        cy.get('#pc_amount').type('2300')
        cy.get('#pc_inDollars_true').check()
        cy.get('#pc_calculate_costs').click()

        cy.get('#pc_conversion_amount')
            .should('contain', '2166.34 dollar (CAD) = 2300.00 U.S. dollar (USD)')
    })

    it('testing the currency exchange', () => {

    })
})