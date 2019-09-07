import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation'
import HomeScreen from '../screens/Screen1'
import SectionScreen from '../screens/Screen3'
import { TabNavigator } from './TabNavigator'

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    Section: SectionScreen
})


export default createAppContainer(TabNavigator)