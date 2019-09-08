import React from "react";
import {
    createMaterialTopTabNavigator
} from "react-navigation";
import {
    HomeScreen,
    CardScreen,
    WarScreen,
    SwordScreen,
    EventScreen
} from "../screens";


export const TabNavigator = createMaterialTopTabNavigator(
    {
        HomeScreen,
        SwordScreen,
        CardScreen,
        WarScreen,
        EventScreen
    },
    {
        tabBarPosition: "bottom",
        animationEnabled: true,
        swipeEnabled: true,
        tabBarOptions: {
            indicatorStyle: {
                backgroundColor: "#5B8BAF",
                height: "100%",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center"
            },
            style: {
                backgroundColor: "#344153",
                height: 60,
                position: "relative",
                zIndex: -888
            },
            activeTintColor: "white",
            pressColor: "transparent",
            pressOpacity: 1,
            showIcon: true,
            showLabel: true,
            labelStyle: {
                fontSize: 10,
                fontWeight: "600",
                margin: 20,
                height: 0
            },
            iconStyle: {
                position: "absolute"
            }
        }
    }
);
