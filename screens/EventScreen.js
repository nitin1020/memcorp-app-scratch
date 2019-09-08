import React, { Component } from 'react';
import { IconView, IconImage, Container, Image, Text, Content } from '../components'

class EventScreen extends Component {

    static navigationOptions = {
        header: null,
        tabBarLabel: "Event",
        tabBarIcon: ({ focused }) => {

            return <IconView
                pose={focused ? "active" : "inactive"}
            >
                <Content>
                    <IconImage
                        resizeMode="contain"
                        source={require('../assets/event.png')}
                    />
                    {
                        focused ? <Text>
                            Events
                </Text> : <Text></Text>
                    }
                </Content>
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

