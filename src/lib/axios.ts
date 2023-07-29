import axios from "axios";

export const getCepApi = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});