import { getOrder } from '../api/ordersClient.cy'

export const fetchOrder = (id: number) => {
    return getOrder(id).then((res) => {
        expect(res.status).to.eq(200)
        return res.body
    })
}
