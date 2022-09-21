describe('testing navigation bar', () => {
    before(function () {
        cy.visit('http://zero.webappsecurity.com/index.html')
    })

    it('navbar', () => {
        cy.get('#onlineBankingMenu').click()
        cy.get('h1').should('be.visible').and('contain', 'Online Banking')
        cy.get('#download_webinspect_link').scrollIntoView()
        cy.wait(3000)
        cy.get('.span6').scrollIntoView()
    })

    it('navbar', () => {
        cy.get('#feedback').click()
        cy.get('#feedback-title').should('be.visible').and('contain', 'Feedback')

        cy.fixture('user-e2e').then(user => {
            const name = user.name
            const email = user.email
            const subject = user.subject
            const comment = user.comment

            cy.get('#name').type(name)
            cy.get('#email').type(email)
            cy.get('#subject').type(subject)
            cy.get('#comment').type(comment)

            cy.get('.btn-primary').click()
            cy.get('#feedback-title').should('be.visible').and('contain', 'Feedback')
        } )
    })
})