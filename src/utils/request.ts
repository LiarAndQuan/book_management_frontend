import axios from 'axios'
import {ElMessage} from "element-plus";

let request = axios.create(
    {
        baseURL: 'http://localhost:8080',
        timeout: 5000
    }
)

request.interceptors.request.use(
    config => {
        return config
    }
)

request.interceptors.response.use(
    (response) => {
        let code = response.data.code;
        if (code != 200) {
            let message = response.data.message;
            ElMessage({
                type: 'error',
                message: message
            })
        }
        return response.data
    },
    (error) => {
        let message = error.response.message
        ElMessage({
            type: 'error',
            message: '接口错误'
        })
        return Promise.reject(error);
    }
)

export default request