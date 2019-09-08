import React, { Component } from 'react';
import { IconView, IconImage, Container, Image, Text, Content } from '../components'

class CardScreen extends Component {
    static navigationOptions = {
        header: null,
        tabBarLabel: "Sword",
        tabBarIcon: ({ focused }) => {

            return <IconView
                pose={focused ? "active" : "inactive"}
            >
                <Content>
                    <IconImage
                        resizeMode="contain"
                        source={require('../assets/cards.png')}
                    />
                    {
                        focused ? <Text>
                            Cards
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
                <Image source={require('../assets/2.png')} />
            </Container>
        );
    }
}

export default CardScreen;

