import { request1, request2 } from "./request";
/* 
滚动信息请求
 */
export function getColumnMsg() {
    let nowaDate = (new Date()).getTime();
    let preDate = nowaDate - 3 * 24 * 60 * 60 * 1000
    return request1({
        url: './order/consumption/baseQuery?schoolId=25042',

        //传参,指定参数
        params: {
            'order.startTime': preDate,
            'order.endTime': nowaDate,
            'limit': 200
        }
    })
}
/* 
头部信息请求
 */

export function getConsumptionAmount() {
    return request2({
        url: './ads_orders_consumption_Query_count/25042'
    })
}
export function getRechargeAmount() {
    return request2({
        url: './adsOrderRechargeQueryCount/25042'
    })
}
export function getConsumptionWater() {
    return request2({
        url: './ads_orders_consumption_water_Query_count/25042'
    })
}
export function getDeviceCount() {
    return request2({
        url: './ads_bot_device_query_count/25042'

    })
}
export function getPersonnelCount() {
    return request2({
        url: './ads_bot_orders_personnel_queryAll_count/25042'
    })
}
/* 
主体信息请求
 */
export function getConsumptionTrend() {
    return request2({
        url: './ads_orders_consumption_avg_Query_count/25042'
    })
}
export function getRechargeTrend() {
    return request2({
        url: './ads_order_recharge_avg_query_count/25042'
    })
}
export function getConsumptionWaterTrend() {
    return request2({
        url: './ads_orders_consumption_water_pic_Query_count/25042'
    })
}
export function getBotDevice() {
    return request2({
        url: './ads_bot_device_count/25042'
    })
}