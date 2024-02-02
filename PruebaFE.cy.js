Given('un usuario abre el navegador de Google', () => {
  cy.visit('https://www.google.com')
  cy.wait(500)
})

When('busca la palabra "Simetrik"', () => {
  cy.get('.SDkEP').type("Symetrik")
  cy.wait(500)
})

When('le da clic en buscar', () => {
  cy.get('.G43f7e > :nth-child(1)').click()
  cy.wait(500)
})

Then('el total de resultados es diferente a cero', () => {
  cy.get('#result-stats').should('not.contain', '0 results')
})