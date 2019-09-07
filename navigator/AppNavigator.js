import { createAppContainer } from 'react-navigation'
//import { createStackNavigator } from 'react-navigation'
// import HomeScreen from '../screens/HomeScreen'
// import SectionScreen from '../screens/CardScreen'
import { TabNavigator } from './TabNavigator'

// const AppNavigator = createStackNavigator({
//     Home: HomeScreen,
//     Section: SectionScreen
// })


export default createAppContainer(TabNavigator)