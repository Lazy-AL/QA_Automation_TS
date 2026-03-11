describe('template spec', () => {
  it('passes', () => {
    cy.request('/orders/1','GET')
  })
})
