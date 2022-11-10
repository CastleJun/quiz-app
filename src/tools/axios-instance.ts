import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const axiosInstance = axios.create({
  baseURL: 'https://opentdb.com/api.php',

  paramsSerializer(params) {
    return new URLSearchParams(params).toString();
  },
  timeout: 10000,
});
