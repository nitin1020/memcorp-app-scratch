import posed from 'react-native-pose'
import styled from 'styled-components'

const IconView = posed.View({
    active: {
        scale: 1.3, opacity: 1,
        scaleY: 1,
        transition: {
            opacity: { ease: 'easeIn', duration: 300 },
            default: { ease: 'linear', duration: 500 }
        }
    },
    inactive: {
        scale: 0.7, opacity: 0.3, scaleY: 1,
        transition: {
            opacity: { ease: 'easeOut', duration: 300 },
            default: { ease: 'linear', duration: 500 }
        }
    }

})


const IconImage = styled.Image`
    width: 36px;
    height:36px;
    z-index:10000;
    position:relative;
`

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
export {
    IconView,
    IconImage,
    Container,
    Image
}