import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:5000/api"
})

export async function getItems() {
  const response = await api.get('/beans')
  const data = response.data.menu
  return data
}

export async function postItems() {
  const response = await api.post('/beans')
  const data = response.data
  return data
}

export async function addOrder(order) {
  const data = {
    items: order.items,
    totalValue: order.totalValue
  }
  const response = await api.post('/profile', data, {
    headers: {
      "Content-Type": "application/json"
    },
  })
  // .then((response) => {
  //   console.log(response);

  // }, (error) => {
  //   console.log(error);
  // });
  const respData = response.data.data
  return respData
}


// export default {
//   postItems,
//   getItems
// }