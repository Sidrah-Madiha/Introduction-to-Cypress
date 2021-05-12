/// <reference types="cypress" />


describe("Verify filers funcitonality", () => {
    before(() => {
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
        cy.get('.new-todo').type("Learn Cypress{enter}")
        cy.get('.new-todo').type("Clean Room{enter}")
        cy.get('.new-todo').type("Learn JavaScript{enter}")
        cy.get(':nth-child(1) > .view > .toggle').click()
    })
    it("Verify user is able to filter active todos", () => {
        cy.contains('Active').click()
        cy.get('.todo-list li').should('have.length', 2)
    })

    it("Verify user is able to filter completed todos", () => {
        cy.contains('Completed').click()
        cy.get('.todo-list li').should('have.length', 1)
    })
    it("Verify user is able to filter all todos", () => {
        cy.contains('All').click()
        cy.get('.todo-list li').should('have.length', 3)
    })

})

