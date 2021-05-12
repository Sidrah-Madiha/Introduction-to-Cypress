/// <reference types="cypress" />
export function navigate() {
    cy.visit("http://todomvc-app-for-testing.surge.sh/")
}
export function addTextInTodo(textToAdd) {
    cy.get('.new-todo').type(textToAdd + "{enter}")
}

export function validateTodoText(todoTextIndex, expectedText) {
    cy.get(`.todo-list li:nth-child(${todoTextIndex + 1}) > .view > label`).should("have.text", expectedText)
}

export function validateToggleStatus(todoTextIndex, toggleStatus) {
    const getButton = cy.get(`.todo-list li:nth-child(${todoTextIndex + 1})  .toggle`)
    getButton.should(`${toggleStatus ? '' : 'not.'}be.checked`)
}

export function toggleTodo(todoTextIndex) {
    cy.get(`.todo-list li:nth-child(${todoTextIndex + 1})  .toggle`).click()
}

export function validateTodoIsMarked(todoTextIndex) {
    cy.get(`.todo-list li:nth-child(${todoTextIndex + 1})  label`).should('have.css', 'text-decoration-line', 'line-through')

}

export function clickClearCompleted() {
    cy.contains("Clear completed").click()
}

export function validateNumberOfTodos(expectedNumberOfTodos) {
    cy.get('.todo-list li').should('have.length', expectedNumberOfTodos)
}

export function clickActiveFilter() {
    cy.contains('Active').click()
}

export function clickAllFilter() {
    cy.contains('All').click()
}

export function clickCompletedFilter() {
    cy.contains('Completed').click()
}


