import axios from 'axios';
export const baseURL=`${process.env.REACT_APP_BASE_URL_FOR_CRA}`;


const api = axios.create({
  baseURL,
  timeout: 5000,
});
export default api;
