/// <reference types="cypress" />
import { TodoPage } from "../page-objects/todo-page.js"
// it("Verify you can visit test page", () => {
//     cy.visit("http://todomvc-app-for-testing.surge.sh")

// })

describe("Verify basic functionality of ToApp", () => {
    const todoPageObj = new TodoPage()
    beforeEach(() => {
        todoPageObj.navigate()
        todoPageObj.addTextInTodo("Learn Cypress")
    })

    it("Verify user is able to add a todo", () => {
        todoPageObj.validateTodoText(0, 'Learn Cypress')
        todoPageObj.validateToggleStatus(0, false)

    })

    describe("Verify Toggle and Clear Completes work", () => {
        it("Verify user is able check todo", () => {

            todoPageObj.toggleTodo(0)
            todoPageObj.validateTodoIsMarked(0)
        })

        it("Verify user is able clear completed task", () => {
            todoPageObj.toggleTodo(0)
            todoPageObj.clickClearCompleted()
            todoPageObj.validateNumberOfTodos(0)

        })
    })
})

describe("Verify filers funcitonality", () => {
    const todoPageObj2 = new TodoPage()
    before(() => {
        todoPageObj2.navigate()
        todoPageObj2.addTextInTodo("Learn Cypress")
        todoPageObj2.addTextInTodo("Clean Room")
        todoPageObj2.addTextInTodo("Learn JavaScript")
        todoPageObj2.toggleTodo(0)

    })
    it("Verify user is able to filter active todos", () => {
        todoPageObj2.clickActiveFilter()
        todoPageObj2.validateNumberOfTodos(2)
    })

    it("Verify user is able to filter completed todos", () => {
        todoPageObj2.clickCompletedFilter()
        todoPageObj2.validateNumberOfTodos(1)
    })
    it("Verify user is able to filter all todos", () => {
        todoPageObj2.clickAllFilter()
        todoPageObj2.validateNumberOfTodos(3)
    })

})

