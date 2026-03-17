
export function createOrder() {
    return cy.request('POST', '/orders')
}

export function getOrder(id: number) {
    return cy.request(`/orders/${id}`)
}
