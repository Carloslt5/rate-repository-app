import React from 'react'
import { View } from 'react-native'
import StyledText from '../styles/StyledText'
// import StyledImage from '../styles/StyledImage'
import { type RepoData } from '../types/repoData.type'
import ViewContainer from '../styles/ViewContainer'

const RepositoryItemHeader = ({ name, description, language }: RepoData) => {
  return (
    <ViewContainer flexDirection='row'>
      {/* <View>
        <StyledImage source={{ uri: ownerAvatarUrl }} />
      </View> */}
      <View style={{ flex: 1 }}>
        <StyledText fontWeight="bold" color="textSecondary" fontSize='subheading'>
          {name}
        </StyledText >
        <StyledText color='textPrimary'>
          {description}
        </StyledText >
        <StyledText fontSize='small' language={language}>
          {language}
        </StyledText >
      </View>
    </ViewContainer >
  )
}

export default RepositoryItemHeader
