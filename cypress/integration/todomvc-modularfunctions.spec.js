/// <reference types="cypress" />
import {
    clickCompletedFilter, clickAllFilter, clickActiveFilter, validateNumberOfTodos, clickClearCompleted,
    validateTodoIsMarked, toggleTodo, validateToggleStatus, validateTodoText, addTextInTodo, navigate
} from "../page-objects/module-functions.js"
// it("Verify you can visit test page", () => {
//     cy.visit("http://todomvc-app-for-testing.surge.sh")

// })

describe("Verify basic functionality of ToApp", () => {

    beforeEach(() => {
        navigate()
        addTextInTodo("Learn Cypress")
    })

    it("Verify user is able to add a todo", () => {
        validateTodoText(0, 'Learn Cypress')
        validateToggleStatus(0, false)

    })

    describe("Verify Toggle and Clear Completes work", () => {
        it("Verify user is able check todo", () => {

            toggleTodo(0)
            validateTodoIsMarked(0)
        })

        it("Verify user is able clear completed task", () => {
            toggleTodo(0)
            clickClearCompleted()
            validateNumberOfTodos(0)

        })
    })
})

describe("Verify filers funcitonality", () => {

    before(() => {
        navigate()
        addTextInTodo("Learn Cypress")
        addTextInTodo("Clean Room")
        addTextInTodo("Learn JavaScript")
        toggleTodo(0)

    })
    it("Verify user is able to filter active todos", () => {
        clickActiveFilter()
        validateNumberOfTodos(2)
    })

    it("Verify user is able to filter completed todos", () => {
        clickCompletedFilter()
        validateNumberOfTodos(1)
    })
    it("Verify user is able to filter all todos", () => {
        clickAllFilter()
        validateNumberOfTodos(3)
    })

})

