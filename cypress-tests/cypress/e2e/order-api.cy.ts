import {createOrder} from "../../../api/ordersClient.cy";
import {waitForOrderReady} from "../../../helpers/waitForOrderReady.cy";

describe("Orders API", ()=>{
    it('creates orders', () =>{
        cy.request('POST','/orders').then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('should repeat assertion until return ready', () => {
        createOrder().then((response)=>{
            const orderId = response.body.id
            waitForOrderReady(orderId)
        })
    });
})
