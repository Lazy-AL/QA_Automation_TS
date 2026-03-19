import {getOrder} from "../api/ordersClient.cy";

export function waitForOrderReady(orderId:number){
    function check(){
        getOrder(orderId).then((res) =>{
            if (res.body.status === 'READY'){
                assert.equal(res.body.status, 'READY')
            }else {
                cy.wait(500)
                check()
            }
        })
    }
    check()
}
