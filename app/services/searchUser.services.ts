import axios, { type AxiosResponse, type AxiosInstance } from 'axios'
import { GITHUB_API_URL } from '@env'
import { type UserGithubData } from '../types/userGithubData.type'
import { type RepoData } from '../types/repoData.type'

class SearchUserServices {
  api: AxiosInstance

  constructor() {
    this.api = axios.create({
      baseURL: `${GITHUB_API_URL}` ?? 'https://api.github.com'
    })
  }

  async getUser(userName: string): Promise<AxiosResponse<UserGithubData>> {
    return await this.api.get(`/users/${userName}`)
  }

  async getRepositories(userName: string): Promise<AxiosResponse<RepoData[]>> {
    return await this.api.get(`/users/${userName}/repos`)
  }
}

const searchUserServices = new SearchUserServices()
export default searchUserServices
