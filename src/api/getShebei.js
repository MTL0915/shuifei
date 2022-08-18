import request from '@/utils/request'

export function getShebei(data) {
    return request({
        url: 'iot/api/v1.0.0/device/getByDevice_id',
        method: 'post',
        data
    })
}