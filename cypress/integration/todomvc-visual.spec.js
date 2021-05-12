/// <reference types="cypress" />

import * as todoObj from "../page-objects/module-functions.js"

describe("visual testing of todo app basics", () => {
    before(() => {
        todoObj.navigate()
    })
    beforeEach(() =>
        cy.eyesOpen({
            appName: 'TAU TodoMVC',
            batchName: 'TAU TodoMVC',
            browser: [
                { name: 'chrome', width: 1024, height: 768 },
                { name: 'chrome', width: 800, height: 600 },
                { name: 'firefox', width: 1024, height: 768 },
                { deviceName: 'iPhone X' },
            ]
        })
    )
    afterEach(() => cy.eyesClose())
    it("basic add and mark complete validation", () => {
        cy.eyesCheckWindow('empty todo list')
        todoObj.addTextInTodo("Learn Cypress")
        todoObj.addTextInTodo("Learn JavaScript")
        todoObj.addTextInTodo("Learn Mocha")
        cy.eyesCheckWindow('todo list has 3 todos')
        todoObj.toggleTodo(0)
        cy.eyesCheckWindow('one todo completed list')
    })
})