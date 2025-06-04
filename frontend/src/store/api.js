import axios from 'axios';
export const baseURL=`${process.env.REACT_APP_BASE_URL_FOR_CRA}`;
console.log(process.env.REACT_APP_BASE_URL_FOR_CRA);


const api = axios.create({
  baseURL,
  withCredentials: true, 
  timeout: 5000,
});
export default api;
