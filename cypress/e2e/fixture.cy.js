describe("testing fixture folder", () => {
    it("fixture folder", () => {
        cy.visit('http://zero.webappsecurity.com/login.html')


        cy.fixture('user').then(users => {
            const username = users.username
            const password = users.password

            cy.get('#user_login').type(username)
            cy.get('#user_password').type(password)
            cy.get('input[type="submit"]').click()
            cy.get('.alert-error').
                should('be.visible').
                and('contain', 'Login and/or password are wrong.')
        })

    })
})