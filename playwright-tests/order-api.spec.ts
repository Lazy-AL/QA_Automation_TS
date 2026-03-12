import {test,expect} from "@playwright/test";


test('Create order return Processing', async({request}) =>{
    const response = await request.post('http://localhost:3000/orders');
    const data = await response.json();

    expect(response.status()).toBe(200);
    expect(data.status).toBe('PROCESSING');
})

test('Repeat until pass', async ({request}) =>{
    const response = await request.post('http://localhost:3000/orders');
    const order = await response.json();

    const orderId = order.id
    const start = Date.now();

    while(true){
        const res = await request.get(`http://localhost:3000/orders/${orderId}`)
        const data = await res.json()

        if (data.status === 'READY'){
            expect(data.status).toBe('READY')
            break
        }
        if(Date.now() - start > 15000){
            throw new Error('Order did not become Ready')
        }

        await new Promise(r => setTimeout(r, 500))
    }
})
