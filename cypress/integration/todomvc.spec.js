/// <reference types="cypress" />

// it("Verify you can visit test page", () => {
//     cy.visit("http://todomvc-app-for-testing.surge.sh")

// })

describe("Verify basic functionality of ToApp", () => {
    beforeEach(() => {
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
        cy.get('.new-todo', { timeout: 6000 }).type("Learn Cypress{enter}")
    })
    it("Verify user is able to add a todo", () => {


        cy.get('label').should("have.text", "Learn Cypress")
        cy.get('.toggle').should('not.be.checked')
    })

    describe("Verify Toggle and Clear Completes work", () => {
        it("Verify user is able check todo", () => {

            cy.get('.toggle').click()
            cy.get('label').should('have.css', 'text-decoration-line', 'line-through')

        })

        it("Verify user is able clear completed task", () => {
            cy.get('.toggle').click()
            cy.contains("Clear completed").click()
            cy.get('.todo-list').should('not.have.descendants', 'li')

        })
    })
})