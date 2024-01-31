import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://yeami-returent.onrender.com'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;