import axios from 'axios'
//содержится в плике  .env
const URL = import.meta.env.VITE_MAIN_ENDPOINT_API

const instance = axios.create({
  baseURL: URL,
})
instance.interceptors.response.use((response) => {
  return response
})
export default instance
