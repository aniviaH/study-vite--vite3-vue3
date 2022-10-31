export default [
  {
    url: '/api/users',
    method: 'get',
    response: () => {
      return {
        code: 20000,
        data: [
          {
            name: 'tom'
          },
          {
            name: 'jerry'
          }
        ],
        message: '获取user列表成功'
      }
    },
  },
  {
    url: '/api/50008',
    method: 'get',
    response: () => {
      return {
        code: 50008,
        // code: 50012,
        // code: 50014,
        data: [
          {
            name: 'tom'
          },
          {
            name: 'jerry'
          }
        ],
        message: '非法令牌'
      }
    }
  }
]