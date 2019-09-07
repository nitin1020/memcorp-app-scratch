import React, { Component } from 'react';
import styled from 'styled-components'
import { IconView, IconImage, Container, Image } from '../components'

class EventScreen extends Component {

    static navigationOptions = {
        header: null,
        tabBarLabel: "Event",
        tabBarIcon: ({ focused }) => {

            return <IconView
                pose={focused ? "active" : "inactive"}
            >
                <IconImage
                    resizeMode="contain"
                    source={require('../assets/event.png')}
                />
            </IconView>
        }
    }

    state = {}
    render() {
        return (
            <Container>
                <Image source={require('../assets/5.png')} />
            </Container>
        );
    }
}

export default EventScreen;

