

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
            cy.get(".tabs--primary").get("a").contains("FieldKit").should("be.visible")
        })
    
        it("Check the BarnKit tab", () => {
            cy.get(".tabs--primary").get("a").contains("BarnKit").should("be.visible")
        })
    
        it("Check the FD2 Config tab", () => {
            cy.get(".tabs--primary").get("a").contains("FD2 Config").should("be.visible")
        })
    })


    /**
     * Check the existence of FieldKit and BarnKit, but not FD2 Config 
     * tabs if a worker account is logged in.
     */
    context('Worker account is logged in', () => {
    
        beforeEach(()=>{
            cy.login("worker1", "farmdata2")
            cy.visit('/farm')
        })
    
        it("Check the FieldKit tab", () => {
            cy.get(".tabs--primary").get("a").contains("FieldKit").should("be.visible")
        })
    
        it("Check the BarnKit tab", () => {
            cy.get(".tabs--primary").get("a").contains("BarnKit").should("be.visible")
        })
    
        it("Check the FD2 Config tab", () => {
            cy.get(".tabs--primary").get("a").get("FD2 Config").should("not.exist")
        })
    })

    /**
     * Check the non-existence of FieldKit, BarnKit and FD2 Config 
     * tabs if a guest account is logged in.
     */
    context('Guest account is logged in', () => {
    
        beforeEach(()=>{
            cy.login("guest", "farmdata2")
            cy.visit('/farm')
        })
    
        it("Check the FieldKit tab", () => {
            cy.get(".tabs--primary").get("a").get("FieldKit").should("not.exist")
        })
    
        it("Check the BarnKit tab", () => {
            cy.get(".tabs--primary").get("a").get("BarnKit").should("not.exist")
        })
    
        it("Check the FD2 Config tab", () => {
            cy.get(".tabs--primary").get("a").get("FD2 Config").should("not.exist")
        })
    })
})
