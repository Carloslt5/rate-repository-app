import HomePage from '../(screens)/home'
import RepositoriesPage from '../(screens)/repositories'
import SearchPage from '../(screens)/search'
import SignInPage from '../(screens)/signin'

export const MenuTabs = [
  {
    name: 'home',
    component: HomePage,
    label: 'Home',
    icon: 'home'
  },
  {
    name: 'search',
    component: SearchPage,
    label: 'Search',
    icon: 'search-circle'
  },
  {
    name: 'repositories',
    component: RepositoriesPage,
    label: 'Repositories',
    icon: 'list-circle'
  },
  {
    name: 'signin',
    component: SignInPage,
    label: 'Signin',
    icon: 'log-in'
  }
]
