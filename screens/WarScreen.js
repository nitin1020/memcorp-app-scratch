import React, { Component } from 'react';
import styled from 'styled-components'

import { IconView, IconImage, Container, Image } from '../components'

class WarScreen extends Component {

    static navigationOptions = {
        header: null,
        tabBarLabel: "Sword",
        tabBarIcon: ({ focused }) => {

            return <IconView
                pose={focused ? "active" : "inactive"}
            >
                <IconImage
                    resizeMode="contain"
                    source={require('../assets/clanwars.png')}
                />
            </IconView>
        }

    }

    state = {}
    render() {
        return (
            <Container>
                <Image source={require('../assets/4.png')} />
            </Container>
        );
    }
}

export default WarScreen;

