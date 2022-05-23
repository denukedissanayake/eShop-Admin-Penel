export const addNewProduct = async (product :any, token?: string) => {
    let data :any = null
    let error :any = null

    console.log("product", JSON.stringify({ ...product }))
    
    const baseURL = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_BASE_URL_LOCAL : process.env.REACT_APP_BASE_URL;

    try {
        const response = await fetch(`${baseURL}/product`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `bearer ${token}`
            },
            body: JSON.stringify({ ...product })
        })

        data = await response.json();
        
    } catch (e) {
        error = e
    }

    return { data, error }
}