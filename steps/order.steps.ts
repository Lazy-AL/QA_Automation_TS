import { Given, When, Then } from '@cucumber/cucumber'
import { expect, request as pwRequest } from '@playwright/test'
import { createOrder } from '../shared/api/ordersClient.pw'
import { awaitForOrderReady } from '../shared/helpers/waitForOrderReady.pw'

Given('I create an order', async function () {
    this.apiContext = await pwRequest.newContext()
    this.order = await createOrder(this.apiContext)
})

When('I wait for the order to be ready', async function () {
    this.result = await awaitForOrderReady(
        this.apiContext,
        this.order.body.id
    )
})

Then('the order status should be {string}', function (status) {
    expect(this.result.status).toBe(status)
})
