describe('Test Seeding Input Miscellaneous Defaults', () =>{
    beforeEach(()=>{
        cy.login("manager1", "farmdata2")
        cy.visit('/farm/fd2-field-kit/seedingInput')
    })

    it('Test the comment text box is empty and enable', ()=>{
        cy.get("[data-cy=comments").should("be.empty")
        cy.get("[data-cy=comments").should('not.be.disabled')
    })

    it('Test the Submit button box is labeled', ()=>{
        cy.get("[data-cy=submit-button]").should("have.text","Submit").should('be.visible')
    })
    
    //Ha test comment
    it("Check that the page has a header", () => {
        cy.get("[data-cy=text-center]").click()
        cy.get("[data-cy=text-center]").should("have text", "Seeding Input Log")
    })
})