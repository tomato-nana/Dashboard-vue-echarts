import axios from 'axios'

export function request1(config) {
    //1.创建axios实例
    const instance = axios.create({
        // baseURL: 'http://c_web.lxt6.cn:8099/informationService/order',
        baseURL: '/informationService',
        timeout: 10000
    })

    //2.axios拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })

    //发送真正的网络请求
    return instance(config)
}

export function request2(config) {
    //1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://39.103.170.217:8080/ads',
        // baseURL: '/ads',
        timeout: 10000
    })

    //2.axios拦截
    instance.interceptors.request.use(config => {
        return config
    }, err => {
        console.log(err)
    })

    instance.interceptors.response.use(res => {
        return res.data
    }, err => {
        console.log(err)
    })

    //发送真正的网络请求
    return instance(config)
}
