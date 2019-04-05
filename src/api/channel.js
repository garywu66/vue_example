import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/admin/channels',
    method: 'get',
    params: query
  })
}

export function createChannel(data) {
  return request({
    url: '/channel/create',
    method: 'post',
    data
  })
}

export function updateChannel(data) {
  return request({
    url: '/channel/update',
    method: 'post',
    data
  })
}
