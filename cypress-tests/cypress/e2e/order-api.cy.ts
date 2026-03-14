import {expect} from "@playwright/test";

describe("Orders API", ()=>{
    it('creates orders', () =>{
        cy.request('POST','/orders').then((response) => {
            // expect(response.status).to.eq(200)
        })
    })


    it('should repeat assertion until return ready', () => {
            cy.request('POST','/orders').then((createResponse) =>{
                const orderId = createResponse.body.id

                function checkOrder(){
                    cy.request(`/orders/${orderId}`).then((res) =>{
                        if (res.body.status === 'READY'){
                            assert.equal(res.body.status, 'READY')
                        }else {
                            cy.wait(500)
                            checkOrder()
                        }
                    })
                }
                    checkOrder()

            })
    });


})
