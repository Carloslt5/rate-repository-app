import axios, { type AxiosResponse, type AxiosInstance } from 'axios'
import { GITHUB_API_URL } from '@env'
import { type UserGithubData } from '../types/userGithubData.type'

class SearchUserServices {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: `${GITHUB_API_URL}`
    })
  }

  async getUser(userName: string): Promise<AxiosResponse<UserGithubData>> {
    return await this.api.get(`/users/${userName}`)
  }

  async getRepositories(userName: string) {
    return await this.api.get(`/users/${userName}/repos`)
  }
}

const searchUserServices = new SearchUserServices()
export default searchUserServices
