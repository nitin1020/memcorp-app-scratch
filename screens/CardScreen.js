import React, { Component } from 'react';
import styled from 'styled-components'
import { Text } from 'react-native';
import { IconView, IconImage, Container, Image } from '../components'

class CardScreen extends Component {
    static navigationOptions = {
        header: null,
        tabBarLabel: "Cards",
        tabBarIcon: ({ focused }) => {

            return <IconView
                pose={focused ? "active" : "inactive"}
            >
                <IconImage
                    resizeMode="contain"
                    source={require('../assets/goldsword.png')}
                />
            </IconView>
        }
    }

    state = {}
    render() {
        return (
            <Container>
                <Image source={require('../assets/3.png')} />
            </Container>
        );
    }
}

export default CardScreen;

