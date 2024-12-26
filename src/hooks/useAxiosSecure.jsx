import axios from "axios";
import { useEffect } from "react";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";



const axiosInstance = axios.create({
    baseURL: 'https://historical-artifacts-tracker-server-seven.vercel.app',
    withCredentials: true
});

const useAxiosSecure = () => {
    const { logOut } = UseAuth()
    const navigate = useNavigate()
    useEffect(() => {
        axiosInstance?.interceptors?.response?.use(response => {
            return response
        }, async error => {
            console.log('error from useAxious secure use interceptor', error)

            if (error.response.status === 401 || error.response.status === 403) {
                // will logout 
                logOut()
                // go to login
                navigate('/login')
            }
        })
    }, [logOut,navigate])

return axiosInstance
};

export default useAxiosSecure;