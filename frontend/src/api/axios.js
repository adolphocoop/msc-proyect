import axios from 'axios'


const instance = axios.create({
    //baseURL: 'http://localhost:4000/api',
    baseURL : [" https://apimaestria.onrender.com/api",
    "https://apimaestria.onrender.com",
],
    withCredentials: true,
    headers:{
        Accept: 'aplication/json'
    }
})

export default instance;