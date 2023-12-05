import React from 'react'
import StyledText from '../styles/StyledText'
import { parseThousands } from '../utils/parseThousands'
import { type RepoData } from '../types/repoData.type'
import ViewContainer from '../styles/ViewContainer'
import StyledButton from '../styles/StyledButton'
import { Platform, Linking } from 'react-native'

export const RepositoryStats = ({ forks_count: forksCount, html_url: htmlURL }: RepoData) => {
  return (
    <ViewContainer style={Platform.OS === 'web' ? { alignItems: 'flex-start' } : null}>
      <ViewContainer flexDirection='row'>
        <StyledText fontWeight='bold'>Forks:</StyledText >
        <StyledText >{parseThousands(forksCount)}</StyledText >
      </ViewContainer>

      <StyledButton onPress={async () => await Linking.openURL(htmlURL)}>
        <StyledText color='textWhite' fontWeight='bold' align='center'>
          View Repo
        </StyledText>
      </StyledButton>
    </ViewContainer>
  )
}
