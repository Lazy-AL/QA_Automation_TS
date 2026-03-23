import {createOrder} from "../shared/api/ordersClient.pw";
import {Given,When,Then} from "@cucumber/cucumber";
import {awaitForOrderReady} from "../shared/helpers/waitForOrderReady.pw";
import {expect,request as pwRequest} from "@playwright/test";

let order:any
let result:any
let apiContext:any

Given('I create an order', async function (){
    apiContext = await pwRequest.newContext()
    order = await  createOrder(apiContext)
})

When('I wait for the order to be ready', async function (){
    result = await awaitForOrderReady(apiContext,order.body.id)
})

Then('the order status should be {string}', function (status){
    expect(result.status).toBe(status)
})
