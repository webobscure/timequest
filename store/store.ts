import { AuthResponse } from './../models/response/AuthResponse';
import { IUser } from "../models/IUser";
import {makeAutoObservable} from 'mobx';
import AuthService from "../services/AuthService";
import axios from "axios";
import { API_URL } from '../http';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Store {
    user = {} as IUser;
    isAuth = false;
    isLoading = false;
    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setUser(user: IUser) {
        this.user = user;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }
   // login
async login(email: string, password: string) {
    try {
        const response = await AuthService.login(email, password);
        console.log('Response:', response);

        // Ожидаем завершения записи в AsyncStorage
        await AsyncStorage.setItem('token', response.data.accessToken);
        this.setAuth(true);
        this.setUser(response.data.user);
    } catch (error) {
        console.log('Error:', error.response?.data?.message);
    }
}

// logout
async logout() {
    try {
        const response = await AuthService.logout();
        
        // Удаляем токен из AsyncStorage
        await AsyncStorage.removeItem('token');
        this.setAuth(false);
        this.setUser({} as IUser);
    } catch (error) {
        console.log(error.response?.data?.message);
    }
}

    async signup(nickname: string, email: string, password: string) {
        try {
            const response = await AuthService.signup(nickname ,email, password);
            console.log(response);
            AsyncStorage.setItem('token', response.data.accessToken);
            this.setAuth(true);
            this.setUser(response.data.user);
        } catch (error) {
            console.log(error.response?.data?.message)
        }
    }


    async checkUser() {
        this.setLoading(true);
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}/refresh`, { withCredentials: true });
            // Assuming the response includes user and token data
            console.log("Response:",response)
            if (response.data) {
                AsyncStorage.setItem('token', response.data.accessToken); // Set the token
                this.setAuth(true); // Update authentication state
                this.setUser(response.data.user); // Update user data
            } else {
                this.setAuth(false);
                this.setUser({} as IUser); // Reset user data
            }
        } catch (error) {
            console.log(error.response?.data?.message);
            this.setAuth(false);
            this.setUser({} as IUser);
        } finally {
            this.setLoading(false);
        }
    }
}