import React, { Component } from 'react';
import styled from 'styled-components'
import { Text, Dimensions, SafeAreaView } from 'react-native';
import { IconView, IconImage, Container, Image } from '../components'

class HomScreen extends Component {
    static navigationOptions = {
        header: null,
        //title: "Home"
        tabBarLabel: "Home",
        tabBarIcon: ({ focused }) => {

            return <IconView
                pose={focused ? "active" : "inactive"}
            >
                <IconImage
                    resizeMode="contain"
                    source={require('../assets/dart.png')}
                />
            </IconView>
        }

    }
    state = {}
    render() {
        return (
            <Container>
                <Image source={require('../assets/1.png')} />
            </Container>
        );
    }
}

export default HomScreen;

