import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 5

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    name: '@title(1,1)',
    'status|1': ['ok', 'deleted']
  }))
}

export default {
  getList: config => {
    const { name, page = 1, limit = 20, sort } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (name && item.name.indexOf(name) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      data: pageList
    }
  },
  getChannel: (config) => {
    const { id } = param2Obj(config.url)
    for (const channel of List) {
      if (channel.id === +id) {
        return channel
      }
    }
  },
  createChannel: () => ({
    data: 'success'
  }),
  updateChannel: () => ({
    data: 'success'
  })
}
