import React, { Component } from 'react';
import { IconView, IconImage, Container, Image, Text, Content } from '../components'

class HomScreen extends Component {
    static navigationOptions = {
        header: null,
        //title: "Home"
        tabBarLabel: "Home",
        tabBarIcon: ({ focused }) => {

            return <IconView
                pose={focused ? "active" : "inactive"}
            >
                <Content>
                    <IconImage
                        resizeMode="contain"
                        source={require('../assets/dart.png')}
                    />
                    {
                        focused ? <Text>
                            Home
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
                <Image source={require('../assets/1.png')} />
            </Container>
        );
    }
}

export default HomScreen;


