import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 3a7bae7b0ed0b11f3f54334516b9547d28cea88f0b5a62d0224366c138bf1f7f'
  }
})