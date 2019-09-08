import React, { Component } from 'react';
import { IconView, IconImage, Container, Image, Text, Content } from '../components'
import { Ionicons } from '@expo/vector-icons'
class CardScreen extends Component {
    static navigationOptions = {
        header: null,
        tabBarLabel: "Cards",
        tabBarIcon: ({ focused }) => {

            return <IconView
                pose={focused ? "active" : "inactive"}
            >
                <Content>
                    <IconImage
                        resizeMode="contain"
                        source={require('../assets/goldsword.png')}
                    />
                    {
                        focused ? <Text>
                            Swords
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
                <Image source={require('../assets/3.png')} />
            </Container>
        );
    }
}

export default CardScreen;

