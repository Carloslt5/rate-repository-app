import React from 'react'
import { type UserGithubData } from '../types/userGithubData.type'
import UserGithubHeader from './UserGithubHeader'
import UserGithubBody from './UserGithubBody'
import StyledCard from '../styles/StyledCard'

const UserGithubCard = ({ searchData }: { searchData: UserGithubData }) => {
  return (
    <StyledCard>
      <UserGithubHeader {...searchData} />
      <UserGithubBody {...searchData} />
    </StyledCard>
  )
}

export default UserGithubCard
