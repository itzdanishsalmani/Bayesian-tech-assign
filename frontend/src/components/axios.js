import axios from "axios";

const axiosInstance = axios.create({
    // baseURL:"http://localhost:9000/"
    baseURL:"https://bayesian-tech-assign.vercel.app/"
})

export default axiosInstance