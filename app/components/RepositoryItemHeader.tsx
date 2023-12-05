import React from 'react'
import StyledText from '../styles/StyledText'
import { type RepoData } from '../types/repoData.type'
import ViewContainer from '../styles/ViewContainer'

export const RepositoryItemHeader = ({ name, description, language }: RepoData) => {
  return (
    <ViewContainer >
      <StyledText fontWeight="bold" color="textSecondary" fontSize='subheading'>
        {name}
      </StyledText >
      <StyledText color='textPrimary'>
        {description ?? 'Description not available'}
      </StyledText >
      <StyledText fontSize='small' language={language}>
        {language ?? 'Unknown'}
      </StyledText >
    </ViewContainer >
  )
}
