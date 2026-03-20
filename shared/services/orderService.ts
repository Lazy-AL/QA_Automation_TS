export const fetchOrder = async (getOrderFn: any, id: number) => {
    const res = await getOrderFn(id)

    if (res.status !== 200) {
        throw new Error('Failed to Fetch')
    }

    return {
        id: res.body.id,
        status: res.body.status
    }
}
