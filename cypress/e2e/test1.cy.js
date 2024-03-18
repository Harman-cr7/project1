it('google search', () => {
    cy.visit('https://google.com')

    cy.get('.SDkEP').type("What is the best option to choose between selenium or cypress")

    
    cy.get('.FPdoLc > center > .gNO89b').click()
    // cy.contains('Google Search').click()
    cy.wait(3000)
    //cy.get('[data-hveid="CAwQAA"] > .LatpMc > .GKS7s').click()

    cy.get('[data-hveid="CAwQAA"] > .LatpMc > .GKS7s').click()

})