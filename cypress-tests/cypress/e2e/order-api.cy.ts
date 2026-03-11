
describe("Orders API", ()=>{
    it('creates orders', () =>{
        cy.request('POST','/orders').then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})
