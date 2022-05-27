export const getProductById = async (token : string | undefined, productId : string) => {
    let data :any = null
    let error :any = null
    
    const baseURL = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_BASE_URL_LOCAL : process.env.REACT_APP_BASE_URL;

    try {
        const response = await fetch(`${baseURL}/product/${productId}`, {
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