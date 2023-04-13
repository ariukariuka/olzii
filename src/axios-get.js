import axios from 'axios'

const getAxios = axios.create({
    baseURL: "https://test-fe256-default-rtdb.asia-southeast1.firebasedatabase.app/",
});


export default getAxios