export const loginAdmin = async (email: string, password: string) => {
    let data = null
    let error = null
    
    const baseURL = (process.env.NODE_ENV === "development") ? process.env.REACT_APP_BASE_URL_LOCAL : process.env.REACT_APP_BASE_URL;

    try {
        const response = await fetch(`${baseURL}/auth/adminlogin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email : email, password : password })
        })

        data = await response.json();
        
    } catch (e) {
        error = e
    }

    return { data, error }
}