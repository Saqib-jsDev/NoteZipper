import axios from 'axios';
export const baseURL=`${process.env.REACT_APP_BASE_URL_FOR_CRA}`;
<<<<<<< HEAD
=======
// export const baseURL='http://127.0.0.1:3035';
>>>>>>> 25ab0f2776a27126c542c0db40875c427e1e9c19


const api = axios.create({
  baseURL,
  timeout: 5000,
});
export default api;
