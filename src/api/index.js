import axios from 'axios'

const api = axios.create({
  baseURL: "http://localhost:5000/api/beans"
})

export async function getItems() {
  const response = await api.get()
  const data = response.data.menu
  return data
}

export async function postItems() {
  const response = await api.post()
  console.log(response)
  const data = response.data
  return data
}

// export default {
//   postItems,
//   getItems
// }