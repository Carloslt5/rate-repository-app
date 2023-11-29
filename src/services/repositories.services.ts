import axios, { type AxiosInstance } from 'axios'
import { REACT_API_URL } from '@env'

class RepositorieServices {
  instance: AxiosInstance

  constructor() {
    this.instance = axios.create({
      baseURL: REACT_API_URL
    })
  }

  async getRepositories() {
    return await this.instance.get('/repositories')
  }
}

const repositorieServices = new RepositorieServices()
export default repositorieServices
