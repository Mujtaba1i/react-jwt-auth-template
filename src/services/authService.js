import axios from "axios"
const BASE_URL = `${import.meta.env.VITE_API_URL}/auth`

function signUp (formData){
    try {
        const res = axios.post(`${BASE_URL}/sign-up`, formData)
    } catch (err) {
        console.log('Ran into an error: '+ err);
    }
}

export {
    signUp,
}