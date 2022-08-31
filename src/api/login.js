import request from '@/utils/request'

export function getTokenMethod(data) {
    return request({
        url: 'iot/api/auth/login',
        method: 'post',
        data
    })
} 