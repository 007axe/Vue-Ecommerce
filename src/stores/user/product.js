import { defineStore } from 'pinia'

export const useProductStore = defineStore('product',  {
  state: () => ({
    list: [{
      name: 'Grand theft auto v',
      imageUrl: 'https://f.ptcdn.info/178/054/000/oxwt1dz3465Ycvw28IK-o.jpg',
      quantity: 10,
      about: 'test',
      status: 'open',
      price: 299
    },
    {
      name: 'Call of Duty',
      imageUrl: 'https://f.ptcdn.info/178/054/000/oxwta1cl5j9Wqo9pNGk-o.jpg',
      quantity: 10,
      about: 'Recheck for detail',
      status: 'open',
      price: 199
    },
    {
      name: 'Resident Evil 2',
      imageUrl: 'https://f.ptcdn.info/748/058/000/pc7c50ndsGqMk6Bbzk2-o.jpg',
      quantity: 10,
      about: 'Recheck for detail',
      status: 'open',
      price: 999
    },
    {
      name: 'Star Wars',
      imageUrl: 'https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/05/star-wars-jedi-fallen-order.jpg',
      quantity: 10,
      about: 'Recheck for detail',
      status: 'open',
      price: 590
    },
    {
      name: 'Watch Dogs',
      imageUrl: 'https://farm9.staticflickr.com/8241/8501913841_d230813445_b.jpg',
      quantity: 10,
      about: 'Recheck for detail',
      status: 'open',
      price: 320
    },
    {
      name: 'Pes 2021',
      imageUrl: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt7886ce1ea2540837/60db4f0b47339c0fc01b7af8/a83a65c2e49578970cabe550e0f17b9d68b15c90.jpg?auto=webp&format=pjpg&width=3840&quality=60',
      quantity: 10,
      about: 'Recheck for detail',
      status: 'open',
      price: 125
    },
  ]
  }),
  actions: {
    filerProducts (searchText) {
      return this.list.filter(product => product.name.includes(searchText))
    }
  }
})
