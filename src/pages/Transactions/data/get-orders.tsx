export const getAllOrders = async (token : string | undefined) => {
    let data = null
    let error = null
    
    const baseURL = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_BASE_URL_LOCAL : process.env.REACT_APP_BASE_URL;

    try {
        const response = await fetch(`${baseURL}/order`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${token}`
            },
        })

        data = await response.json();
        
    } catch (e) {
        error = e
    }

    return { data, error }
}