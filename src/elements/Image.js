import React from "react"
import styled from 'styled-components'

const Image = (props) => {

    const { shape, src, size, width, height } = props

    const styles = {
        src,
        size,
        width,
        height,
    }

    if (shape === 'circle') {
        return (
            <React.Fragment>
                <ImageCircle {...styles}></ImageCircle>
            </React.Fragment>
        )
    }

    if (shape === 'rectangle') {
        return (
            <React.Fragment>
                <Outter>
                    <Inner {...styles}></Inner>
                </Outter>
            </React.Fragment>
        )
    }
}

Image.defaultProps = {
    shape: 'rectangle',
    src: 'http://scuba365.co.kr/web/upload/NNEditor/20160804/copy(1470241074)-02.jpg',
    size: 36,
    width: '100%',
    height: '100%',
}

const Outter = styled.div`
    width: 90%;
    /* min-width: 250px; */
    margin: 10px auto;
`

const Inner = styled.div`
    /* position: relative; */
    padding-top: 100%;
    /* width: ${(props) => props.size}px; */
    /* height: ${(props) => props.size}px; */
    /* max-width: 54vw; */
    /* max-height: 54vh; */

    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    
    overflow: hidden;
    background-image: url('${(props) => props.src}');
    
`

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url('${(props) => props.src}');
    background-size: cover;
    margin: 4px;
`

export default Image;