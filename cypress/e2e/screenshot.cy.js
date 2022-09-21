describe('screenshot', () => {
    it('full screen screenshot', () => {
        cy.visit('https://devexpress.github.io/testcafe/example/')
        cy.screenshot({ capture: 'fullPage'})
    })

    it('single element screenshot', () => {
        cy.get('header').screenshot()
    })
})