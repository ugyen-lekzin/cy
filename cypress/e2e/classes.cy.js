// class BasePage {
//     static HomePage() {
//         cy.visit('https://devexpress.github.io/testcafe/example/')
//     }
//
//     static wait(number){
//         cy.wait(number)
//     }
// }
//
// class OverAllPage extends BasePage {
//     static scrollToBottom(){
//         cy.get('#submit-button').scrollIntoView()
//     }
//
//     static scrollToTop(){
//         cy.get('header').scrollIntoView()
//     }
// }
//
// describe('classes', () => {
//     it('extracting classes in cypress', () => {
//         OverAllPage.HomePage()
//         OverAllPage.scrollToBottom()
//         cy.wait(3000)
//         OverAllPage.scrollToTop()
//         cy.wait(1000)
//     })
// })





















class BasePage {
    static HomePage(){
        cy.visit('http://zero.webappsecurity.com/login.html')
    }
}
class OverAll extends BasePage{
    static LoginDteails(){
        cy.login('username', 'password')
    }

    static VerifyingLogin(){
        cy.get('h2').should('be.visible').and('contain', 'Cash Accounts')
    }
}

describe('using class for login', () => {
    before(function(){
        OverAll.HomePage()
    })
    it('using class for login using custom commands', () => {
        OverAll.LoginDteails()
        OverAll.VerifyingLogin()
    })
})