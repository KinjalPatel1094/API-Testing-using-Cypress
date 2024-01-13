/// <reference types = "cypress" />

describe('Test with Backend',() => {

    beforeEach('Login to the app', () =>{
        cy.loginToApplication()
    })

    it('Verify Correct request and response', () => {

        // Intercept method to intercept API calls 
        cy.intercept('POST', 'https://api.realworld.io/api/articles/').as('postArticles') // save as alias to use it later

        cy.contains('New Article').click()
        cy.get('[formcontrolname="title"]').type('This is the new title')
        cy.get('[formcontrolname="description"]').type('This is a description')
        cy.get('[formcontrolname="body"]').type('This is a body of the article')
        cy.contains('Publish Article').click()


        cy.wait('@postArticles').then( xhr => {
            console.log(xhr)
            expect(xhr.response.statusCode).to.equal(201)
            expect(xhr.request.body.article.body).to.equal('This is a body of the article')
            expect(xhr.response.body.article.description).to.equal('This is a description')

        })
        
    })
})