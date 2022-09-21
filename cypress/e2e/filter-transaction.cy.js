describe('filter transaction', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/')
        cy.url().should('include', 'webappsecurity.com')
    })

    it('testing filter transaction', () => {
        cy.get('#signin_button').click()
        cy.login('username', 'password')

        cy.get('#account_activity_tab').click()
        cy.contains('Find Transactions').click()
        cy.get('#aa_description').type('hello!')
        cy.get('#aa_fromDate').type('2020-02-02 {enter}')
        cy.get('#aa_toDate').type('2020-09-09 {enter}')
        cy.get('#aa_fromAmount').type('3200 {enter}')
        cy.get('#aa_toAmount').type('5400 {enter}')
        cy.get('#aa_type').select('Deposit')
        cy.get('button[type="submit" ]').click()

    })
})