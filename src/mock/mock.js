import Mock from 'mockjs'     // es6语法 引入 mock模块

Mock.mock("http://localhost:9001/user",{
    'name': '@name', // 随机生成姓名
    'email': '@email', //随机生成姓名
    'age|1-10': 5
})

Mock.mock("http://localhost:9001/menu",{
    'id': '@increment', // 随机生成 id
    'name': 'menu',
    'order|10-20': 12
})
