describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.wait(500)
    cy.get('.SDkEP').type("Symetrik")
    cy.wait(500)
    cy.get('.G43f7e > :nth-child(1)').click()
    cy.wait(500)
    cy.get('#result-stats').should('not.contain', '0 results')
})
})