import request from '@/utils/request'

export function getShuifeiData(id) {
    return request({
        url: 'nyy/admin/hd/hd_device/getDetailById?device_id=' + id,
        method: 'get'
    })
}