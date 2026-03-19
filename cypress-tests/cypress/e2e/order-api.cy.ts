import {createOrder, getOrder} from "../../../shared/api/ordersClient.cy";
import {fetchOrder} from "../../../shared/services/orderService";

describe("Orders API", ()=>{
    it('creates orders', () =>{
        cy.request('POST','/orders').then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('should repeat assertion until return ready', () => {
        createOrder().then((response) => {
            const orderId = response.body.id

            fetchOrder((id) => getOrder(id), orderId).then((order) => {
                expect(order.status).to.eq('READY')
            })
        })
    });
})
