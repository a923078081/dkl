import axios from 'axios'
import encrypt from '../ulits/setEncryptData'
axios.defaults.baseURL='http://127.0.0.1:8000'
axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.interceptors.request.use(config => {
    config.url=config.baseURL+config.url
    return config
}, error => {
    return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(response => {
    const { data } = response
    try {
        if (data.code !== 200) {

        }
    } catch (e) {
        console.log(e)
    }
    return data
}, error => {
    if (error.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
        console.error('请求超时');
    } else {
        console.error(`${error.message}`)
    }
    console.dir(error)
    return Promise.reject(error)
})
export const HTTP_POST = (url, data) => {
    if (data) {
        data.auth_time_stamp = new Date().getTime();
        data.auth_nonce = 2698826366;
        let params = encrypt(data)
        let NewData={
            ...data,
            "auth_sign" : params
        }
         console.log(NewData)
        return axios.post(url, params)
    }
    return axios.post(url)
}

export const HTTP_GET = (url, data) => {
    if (data) {
         data.auth_time_stamp = new Date().getTime().toString();
         data.auth_nonce = '2698826366';
        let pwd = encrypt(data)
        let NewData={
            ...data,
            "auth_sign" : pwd
        }
        console.log(NewData)
        return axios.get(url, {
            params: NewData,
        })
    }
    return axios.get(url)
}

export const HTTP_SJL = (url, data, files) => {
    let _params = new FormData()
    for (let i in data) {
        _params.append(i, data[i])
    }
    // _params.append("file", files);
    for (let j in files) {
        _params.append("file", files[j])
    }
    let config = {
        headers: { "Content-Type": "multipart/form-data" }
    }
    return axios.post(url, _params, config);
}
export const HTTP_FILE = (url, file) => {
    let _params = new FormData()
    for (let i in file) {
        console.log(i)
        console.log(file)
        _params.append(i, file[i])
    }
    let config = {
        headers: { "Content-Type": "multipart/form-data" }
    }
    return axios.post(url, _params, config)
}
export const HTTP_ALL = (arr) => {
    return axios.all(arr).then(axios.spread((...res) => {
        return Promise.resolve(res)
    }))
}