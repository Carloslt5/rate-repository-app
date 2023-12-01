import theme from '../styles/theme'

export const getBackgroundColorForLanguage = (language: string) => {
  switch (language) {
    case 'JavaScript':
      return theme.langugeColors.JavaScript
    case 'TypeScript':
      return theme.langugeColors.TypeScript
    case 'Python':
      return theme.langugeColors.Python
    case 'PHP':
      return theme.langugeColors.PHP
    case 'Ruby':
      return theme.langugeColors.Ruby
    case 'C++':
      return theme.langugeColors.C
    default:
      return 'gray'
  }
}