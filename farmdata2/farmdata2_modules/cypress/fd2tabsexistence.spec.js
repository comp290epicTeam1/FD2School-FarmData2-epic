

describe("Test tabs existence for each user's account", ()=>{
    /**
     * Check the existence of FieldKit, BarnKit, and FD2 Config tabs if
     * a manager account is logged in.
     */
    context('Manager account is logged in', () => {
    
        beforeEach(()=>{
            cy.login("manager1", "farmdata2")
            cy.visit('/farm')
        })
    
        it("Check the FieldKit tab", () => {
            cy.get(".tabs--primary").get("a").contains("FieldKit")
        })
    
        it("Check the BarnKit tab", () => {
            cy.get(".tabs--primary").get("a").contains("BarnKit")
        })
    
        it("Check the FD2 Config tab", () => {
            cy.get(".tabs--primary").get("a").contains("FD2 Config")
        })
    })

})
