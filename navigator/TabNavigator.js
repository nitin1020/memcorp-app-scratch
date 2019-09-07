import React from 'react'
import { createBottomTabNavigator, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import { HomeScreen, CardScreen, WarScreen, SwordScreen, EventScreen } from '../screens'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'
import { red } from 'ansi-colors'
import posed from "react-native-pose";

import { Animated, View, TouchableWithoutFeedback } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

// HomeScreen.navigationOptions = {
//     tabBarLabel: "Home",
//     tabBarIcon: ({ focused }) => {
//         return <IconView
//             pose={focused ? "active" : "inactive"}
//         >
//             <Image
//                 resizeMode="contain"
//                 source={require('../assets/dart.png')}
//             />
//         </IconView>
//     }
// }

// CardScreen.navigationOptions = {
//     tabBarLabel: "Card",
//     tabBarIcon: ({ focused }) => {

//         return <IconView
//             pose={focused ? "active" : "inactive"}
//         >
//             <Image
//                 resizeMode="contain"
//                 source={require('../assets/nitin.png')}
//             />
//         </IconView>
//     }
// }

// SwordScreen.navigationOptions = {
//     tabBarLabel: "Sword",
//     tabBarIcon: ({ focused }) => {
//         return <IconView
//             pose={focused ? "active" : "inactive"}
//         >
//             <Image
//                 resizeMode="contain"
//                 source={require('../assets/cards.png')}
//             />
//         </IconView>
//     }
// }

// WarScreen.navigationOptions = {
//     tabBarLabel: "War",
//     tabBarIcon: ({ focused }) => {

//         return <IconView
//             pose={focused ? "active" : "inactive"}
//         >
//             <Image
//                 resizeMode="contain"
//                 source={require('../assets/clanwars.png')}
//             />
//         </IconView>
//     }
// }

// EventScreen.navigationOptions = {
//     tabBarLabel: "Event",
//     tabBarIcon: ({ focused }) => {

//         return <IconView
//             pose={focused ? "active" : "inactive"}
//         >
//             <Image
//                 resizeMode="contain"
//                 source={require('../assets/event.png')}
//             />
//         </IconView>
//     }
// }

export const TabNavigator = createMaterialTopTabNavigator({
    HomeScreen,
    SwordScreen,
    CardScreen,
    WarScreen,
    EventScreen
}, {

    // lazy: true,
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: true,
    //  resetOnBlur: false,
    // removeClippedSubviews: true,
    tabBarOptions: {

        indicatorStyle: {
            backgroundColor: '#5B8BAF',
            position: "absolute",
            padding: 0,
            height: '100%'
        },
        style: {
            backgroundColor: '#344153',
            height: 60,
            position: "relative",
            zIndex: -888
        },
        activeTintColor: 'white',
        pressColor: 'transparent',
        pressOpacity: 1,
        showIcon: true,
        showLabel: false,
        labelStyle: {
            fontSize: 10,
            fontWeight: '600'
        },
        iconStyle: {
            overflow: "visible",
            zIndex: 23333,
            borderColor: 'black'
        }
    }
})

