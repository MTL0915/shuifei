import request from '@/utils/request'

export function getToken(data) {
    return request({
        url: 'iot/api/auth/login',
        method: 'post',
        data
    })
} 