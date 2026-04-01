import { Given, Then } from '@cucumber/cucumber'
import { expect, request as pwRequest } from '@playwright/test'
import { createOrder } from '../shared/api/ordersClient.pw'
import { awaitForOrderReady } from '../shared/helpers/waitForOrderReady.pw'
import { createOrderAndWaitReady } from '../shared/services/orderService'

// Given('I create an order', async function () {
//     this.apiContext = await pwRequest.newContext()

    this.result = await createOrderAndWaitReady(
        () => createOrder(this.apiContext),
        (id) => awaitForOrderReady(this.apiContext, id)
    )
})

Then('the order status should be {string}', function (status) {
    expect(this.result.status).toBe(status)
})
