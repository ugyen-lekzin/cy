describe('read/write data into json and text file', () => {
    it('writing data into json file', () => {
        cy.writeFile('details.json', { "firstName" : "ugyen", "lastName": "lekzin"})
    })

    it('writing data into text file', () => {
        cy.writeFile('text.txt', {"name": "sonam"})
        cy.writeFile('person.txt', 'hello world!')
    })

    it("read data from the JSON file", () => {
        cy.readFile('details.json').
            its('firstName').
            should('eq', 'ugyen')
    })

    it('read data from txt file', () => {
        // cy.readFile('text.txt').its('name').should('eq', 'sonam') - this does not work for txt file
        cy.readFile('person.txt').should('eq', 'hello world!')
    })

    it('should read and verify the browser content', () => {
        cy.visit('http://example.com/')
        cy.document().its('contentType').should('eq', 'text/html')

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })

    it('another example of browser content', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.document().its('contentType').should('eq', 'text/html')

        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    })
});