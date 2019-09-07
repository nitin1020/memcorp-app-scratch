import React, { Component } from 'react';
import styled from 'styled-components'
import { Text } from 'react-native'
import { IconView, IconImage, Container, Image } from '../components'

class CardScreen extends Component {
    static navigationOptions = {
        header: null,
        tabBarLabel: "Sword",
        tabBarIcon: ({ focused }) => {

            return <IconView
                pose={focused ? "active" : "inactive"}
            >
                <IconImage
                    resizeMode="contain"
                    source={require('../assets/cards.png')}
                />
            </IconView>
        }

    }
    state = {}
    render() {
        return (
            <Container>
                <Image source={require('../assets/2.png')} />
            </Container>
        );
    }
}

export default CardScreen;

