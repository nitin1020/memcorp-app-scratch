import React, { Component } from 'react';
import styled from 'styled-components'
import { Text } from 'react-native'

class Screen2 extends Component {
    static navigationOptions = {
        header: null
        //title: "Home"
    }
    state = {}
    render() {
        return (
            <Container>
                <Image source={require('../assets/Screen2.png')} />
            </Container>
        );
    }
}

export default Screen2;


const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: lightgoldenrodyellow;
`

const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    margin-top:20;
`