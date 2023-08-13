import axios from 'axios'

const url =
    process.env.REACT_APP_SERVER_URL || 'https://iscofhr.online/backend/public'

axios.defaults.baseURL = `${url}/api`
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.withCredentials = true

axios.get(`${url}/sanctum/csrf-cookie`).catch((error) => console.error(error))
