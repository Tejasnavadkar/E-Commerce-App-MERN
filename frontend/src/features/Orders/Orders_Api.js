


export const CreateOrder = async (payload) => {
    try {
        const response = await fetch(`http://localhost:8000/orders`, {
            method: 'POST',
            body: JSON.stringify(payload)
        })

        const data = response.json()
        return data
    } catch (error) {
        throw new Error(error)
    }

}