export const fetchOrder = (getOrderFn: any, id: number) => {
    return getOrderFn(id).then((res: any) => {
        if (res.status !== 200) {
            throw new Error('Failed to Fetch')
        }

        return {
            id: res.body.id,
            status: res.body.status
        }
    })
}
