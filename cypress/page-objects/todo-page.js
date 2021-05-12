export class TodoPage {

    navigate() {
        cy.visit("http://todomvc-app-for-testing.surge.sh/")
    }
    addTextInTodo(textToAdd) {
        cy.get('.new-todo').type(textToAdd + "{enter}")
    }

    validateTodoText(todoTextIndex, expectedText) {
        cy.get(`.todo-list li:nth-child(${todoTextIndex + 1}) > .view > label`).should("have.text", expectedText)
    }

    validateToggleStatus(todoTextIndex, toggleStatus) {
        const getButton = cy.get(`.todo-list li:nth-child(${todoTextIndex + 1})  .toggle`)
        getButton.should(`${toggleStatus ? '' : 'not.'}be.checked`)
    }

    toggleTodo(todoTextIndex) {
        cy.get(`.todo-list li:nth-child(${todoTextIndex + 1})  .toggle`).click()
    }

    validateTodoIsMarked(todoTextIndex) {
        cy.get(`.todo-list li:nth-child(${todoTextIndex + 1})  label`).should('have.css', 'text-decoration-line', 'line-through')

    }

    clickClearCompleted() {
        cy.contains("Clear completed").click()
    }

    validateNumberOfTodos(expectedNumberOfTodos) {
        cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
    }

    clickActiveFilter() {
        cy.contains('Active').click()
    }

    clickAllFilter() {
        cy.contains('All').click()
    }

    clickCompletedFilter() {
        cy.contains('Completed').click()
    }



}