const mockList = [
  {id: 1, name: 'tom', age: 18},
  {id: 2, name: 'jerry', age: 18},
  {id: 3, name: 'mike', age: 18},
  {id: 4, name: 'jack', age: 18},
  {id: 5, name: 'larry', age: 18},
  {id: 6, name: 'white', age: 18},
  {id: 7, name: 'peter', age: 18},
  {id: 8, name: 'james', age: 18},
]

export default [
  {
    url: '/api/createUser',
    method: 'post',
    response: ({ body }) => {
      console.log('body>>>>>>>>', body)
      return {
        code: 0,
        message: 'ok',
        data: null,
      }
    },
  },
  {
    url: '/api/getUser',
    type: 'get',
    response: () => {
      return {
        code: 20000,
        data: {id: 1, name: 'tom', age: 18}
      }
    }
  },
  {
    url: '/api/getUsers',
    method: 'get',
    response: (config) => {
      // return {
      //   code: 0,
      //   message: 'ok',
      //   data: ['tom', 'jerry'],
      // }

      // 从查询参数中获取分页、过滤关键词等信息
      const {page = 1, limit = 5} = config.query

      // 分页
      const data = mockList.filter((item, index) => {
        return index < limit * page && index >= limit * (page - 1)
      })
    },
  },
]