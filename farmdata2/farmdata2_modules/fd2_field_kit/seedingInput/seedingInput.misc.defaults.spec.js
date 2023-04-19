describe('Test Seeding Input Miscellaneous Defaults', () =>{
    beforeEach(()=>{
        cy.login("manager1", "farmdata2")
        cy.visit('/farm/fd2-field-kit/seedingInput')
    })

    it('', ()=>{
        cy.get("[data-cy=comments").should("be.empty")
    })
    //Ha test comment
    it("Check that the page has a header", () => {
        cy.get("[data-cy=text-center]").click()
        cy.get("[data-cy=text-center]").should("have text", "Seeding Input Log")
    })
})