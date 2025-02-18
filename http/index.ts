import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";
export const API_URL = 'http://localhost:3000/api';


const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${AsyncStorage.getItem('token')}`
    console.log(`Token: ${AsyncStorage.getItem('token').toString()}`)
    return config;
})

export default $api;