import request from '@/utils/request'

export function getChuanganqi(data) {
    return request({
        url: 'iot/api/v1.0.0/device/getByDevice_id',
        method: 'post',
        data
    })
}