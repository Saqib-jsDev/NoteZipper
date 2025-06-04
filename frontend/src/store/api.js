import axios from 'axios';
// export const baseURL=`${process.env.REACT_APP_BASE_URL_FOR_CRA}`;
export const baseURL='http://127.0.0.1:3035';


const api = axios.create({
  baseURL,
  timeout: 5000,
});
export default api;