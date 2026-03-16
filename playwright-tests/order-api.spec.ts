import {test,expect} from "@playwright/test";
import {awaitForOrderReady} from "../helpers/waitForOrderReady.pw";
import {createOrder} from "../api/ordersClient.pw";


test('Should return status 200 and PROCESSING', async({request}) =>{
    const {response, body} = await createOrder(request)

    expect(response.status()).toBe(200);
    expect(body.status).toBe('PROCESSING');
})

test('Should repeat until pass', async ({request}) =>{
    const order = await createOrder(request)

    const  result = await awaitForOrderReady(request,order.body.id)

    expect(result.status).toBe('READY')
})
