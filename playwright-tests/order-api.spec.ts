import {test,expect} from "@playwright/test";

test('Create order return Processing', async({request}) =>{
    const response = await request.post('http://localhost:3000/orders');
    const data = await response.json();

    expect(response.status()).toBe(200);
    expect(data.status).toBe('PROCESSING');
})
