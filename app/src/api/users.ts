import axios from 'axios'
const usersURL = 'https://jsonplaceholder.typicode.com/users'

export async function loadUsers(url = usersURL) {
  try {
    const responseData = await axios.get(url)
    console.log(responseData.data)
    return await responseData.data
  } catch (err) {
    console.log(err)
  }
}
