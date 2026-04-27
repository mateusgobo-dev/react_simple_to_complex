import axios from 'axios'
//Base URL: https://api.themoviedb.org/3/
//Base img: https://image.tmdb.org/t/p/original/
//Url api: 


const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"
});

export default api;