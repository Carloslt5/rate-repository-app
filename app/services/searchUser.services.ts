import axios, { type AxiosResponse, type AxiosInstance } from 'axios'
import { GITHUB_API_URL } from '@env'
import { type UserGithub } from '../types/userGithub.type'

class SearchUserServices {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: `${GITHUB_API_URL}`
    })
  }

  async getUser(userName: string): Promise<AxiosResponse<UserGithub>> {
    return await this.api.get(`/users/${userName}`)
  }
}

const searchUserServices = new SearchUserServices()
export default searchUserServices
