import request from '@/utils/request'

export function fetchList(channel_id, query) {
  return request({
    url: `/api/admin/channels/${channel_id}/shops`,
    method: 'get',
    params: query
  })
}

export function fetchListWithChannel() {
  return request({
    url: '/api/admin/shops/getAllWithChannel',
    method: 'get'
  })
}

export function createShop(channel_id, data) {
  return request({
    url: `/api/admin/channels/${channel_id}/shops`,
    method: 'post',
    data
  })
}

export function updateShop(channel_id, data) {
  return request({
    url: `/api/admin/channels/${channel_id}/shops/${data.id}`,
    method: 'put',
    data
  })
}

export function deleteShop(channel_id, data) {
  return request({
    url: `/api/admin/channels/${channel_id}/shops/${data.id}`,
    method: 'delete'
  })
}
