import React, { Component } from 'react';
import styled from 'styled-components'
import { Text, Dimensions, SafeAreaView } from 'react-native';


class Screen1 extends Component {
    static navigationOptions = {
        header: null
        //title: "Home"
    }
    state = {}
    render() {
        return (
            <Container>
                <Image source={require('../assets/Screen1.png')} />
            </Container>
        );
    }
}

export default Screen1;

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background: lightblue;
`

const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    margin-top:20;
`