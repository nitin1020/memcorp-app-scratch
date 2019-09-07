import React, { Component } from 'react';
import styled from 'styled-components'

class Screen5 extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Image source={require('../assets/Screen5.png')} />
            </Container>
        );
    }
}

export default Screen5;

const Container = styled.View``

const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    margin-top:20;
`