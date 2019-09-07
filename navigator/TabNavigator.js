import React from 'react'
import { createBottomTabNavigator, createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation'
import { Screen1, Screen2, Screen3, Screen4, Screen5 } from '../screens'
import styled from 'styled-components'
import { Ionicons } from '@expo/vector-icons'
import { red } from 'ansi-colors'
import posed from "react-native-pose";

import { Animated, View, TouchableWithoutFeedback } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HomeStack = Screen1

HomeStack.navigationOptions = {
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => {
        return <IconView
            pose={focused ? "active" : "inactive"}
        >
            <Image
                resizeMode="contain"
                source={require('../assets/dart.png')}
            />
        </IconView>
    }
}

const SwordStack = Screen2;

SwordStack.navigationOptions = {
    tabBarLabel: "Sword",
    tabBarIcon: ({ focused }) => {
        return <IconView
            pose={focused ? "active" : "inactive"}
        >
            <Image
                resizeMode="contain"
                source={require('../assets/Sword.png')}
            />
        </IconView>
    }
}

const CardStack = Screen3

CardStack.navigationOptions = {
    tabBarLabel: "Card",
    tabBarIcon: ({ focused }) => {

        return <IconView
            pose={focused ? "active" : "inactive"}
        >
            <Image
                resizeMode="contain"
                source={require('../assets/cards.png')}
            />
        </IconView>
    }
}

const WarStack = Screen4;

WarStack.navigationOptions = {
    tabBarLabel: "War",
    tabBarIcon: ({ focused }) => {

        return <IconView
            pose={focused ? "active" : "inactive"}
        >
            <Image
                resizeMode="contain"
                source={require('../assets/cards.png')}
            />
        </IconView>
    }
}


const EventStack = Screen5;

EventStack.navigationOptions = {
    tabBarLabel: "Event",
    tabBarIcon: ({ focused }) => {

        return <IconView
            pose={focused ? "active" : "inactive"}
        >
            <Image
                resizeMode="contain"
                source={require('../assets/cards.png')}
            />
        </IconView>
    }
}

export const TabNavigator = createMaterialTopTabNavigator({
    HomeStack,
    SwordStack,
    CardStack,
    WarStack,
    EventStack
}, {

    lazy: true,
    tabBarPosition: "bottom",
    animationEnabled: true,
    swipeEnabled: true,
    resetOnBlur: false,
    removeClippedSubviews: true,
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
            zIndex: 23333
        }
    }

})

const IconView = posed.View({
    active: {
        scale: 1.3, opacity: 1,
        scaleY: 1,
        transition: {
            opacity: { ease: 'easeIn', duration: 300 },
            default: { ease: 'linear', duration: 500 }
        }
    },
    inactive: {
        scale: 0.7, opacity: 0.3, scaleY: 1,
        transition: {
            opacity: { ease: 'easeOut', duration: 300 },
            default: { ease: 'linear', duration: 500 }
        }
    }

})


const Image = styled.Image`
    width: 36px;
    height:36px;
    z-index:10000;
    position:relative;
`