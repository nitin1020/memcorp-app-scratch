import React, { Component } from 'react';
import styled from 'styled-components'
class Screen4 extends Component {
    state = {}
    render() {
        return (
            <Container>
                <Image source={require('../assets/Screen4.png')} />
            </Container>
        );
    }
}

export default Screen4;


const Container = styled.View``

const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    margin-top:20;
`