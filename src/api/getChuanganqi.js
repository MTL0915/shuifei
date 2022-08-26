import request from '@/utils/request'

export function getChuanganqi(data) {
    return request({
        // url: 'iot/api/v1.0.0/device/getByDevice_id',
        // method: 'post',
        // data
        url: 'nyy/admin/hd/hd_device/getDetailById?device_id=PC01B-2110019',
        method: 'get'
    })
}