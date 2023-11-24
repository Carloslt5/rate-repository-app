import React from 'react'
import { View } from 'react-native'
import StyledText from '../styles/StyledText'
import { type Repository } from '../data/Repository.type'
import StyledCard from '../styles/StyledCard'
import StyledImage from '../styles/StyledImage'

const RepositoryItemHeader: React.FC<Repository> = ({ fullName, description, language, ownerAvatarUrl }) => {
  return (
    <StyledCard flexDirection='flex-row'>
      <View>
        <StyledImage source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontWeight="bold" color="textSecondary" fontSize='subheading'>
          {fullName}
        </StyledText >
        <StyledText color='textPrimary'>
          Description: {description}
        </StyledText >
        <StyledText bgColor>
          {language}
        </StyledText >
      </View>
    </StyledCard>
  )
}

export default RepositoryItemHeader
