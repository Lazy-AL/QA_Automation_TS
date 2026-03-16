import {getOrder} from "../api/ordersClient.pw";
export async function awaitForOrderReady(request,orderId){
    const start = Date.now()

    while(true){
        const order = await getOrder(request,orderId)

        if(order.status === 'READY'){
            return order
        }

        if (Date.now() - start > 15000){
            throw new Error('Order did not become READY')
        }

        await new Promise(r => setTimeout(r, 500))
    }
}
