import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/channel/list',
    method: 'get',
    params: query
  })
}

export function fetchChannel(id) {
  return request({
    url: '/channel/detail',
    method: 'get',
    params: { id }
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
