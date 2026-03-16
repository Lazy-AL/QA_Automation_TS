export async function createOrder(request){
    const response = await request.post('http://localhost:3000/orders')
    const body = await response.json()

    return {response,body}
}

export async function getOrder(request,orderId){
    const response = await request.get(`http://localhost:3000/orders/${orderId}`)
    return response.json()
}
