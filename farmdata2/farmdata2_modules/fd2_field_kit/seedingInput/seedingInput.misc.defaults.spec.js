describe('Test Seeding Input Miscellaneous Defaults', () =>{
    beforeEach(() => {
        cy.login("manager1", "farmdata2")
        cy.visit("/farm/fd2-field-kit/seedingInput/seedingInput.html")
    })

    it("Check that the SUBMIT button is disabled", () => {
        cy.get("[data-cy=submit-button]").should("be.disabled")
    })
})
