import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/api/admin/devices',
    method: 'get',
    params: query
  })
}

export function createDevice(data) {
  return request({
    url: '/api/admin/devices',
    method: 'post',
    data
  })
}

export function updateDevice(data) {
  return request({
    url: `/api/admin/devices/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteDevice(data) {
  return request({
    url: `/api/admin/devices/${data.id}`,
    method: 'delete'
  })
}
