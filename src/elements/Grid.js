import React from "react"
import styled from 'styled-components'

const Grid = (props) => {

    const { flex_space, flex_col, width, height, padding, margin, bg, children, center, pos, _onClick } = props

    const styles = {
        //flex, align-item : center, justify : space_between
        flex_space,
        //flex, colum
        flex_col,
        width,
        height,
        padding,
        margin,
        //배경색 
        bg,
        //폰트 중앙 정렬
        center,
        //position
        pos,
        _onClick,
    }

    return (
        <React.Fragment>
            <GridBox {...styles} onClick={_onClick}>{children}</GridBox>
        </React.Fragment>
    )
}

Grid.defaultProps = {
    children: null,
    flex_space: false,
    width: '100%',
    height: '100%',
    padding: false,
    margin: false,
    bg: false,
    center: false,
    pos: false,
    _onClick: () => { },
}

const GridBox = styled.div`
    width: ${(props) => props.width};
    /* max-width: 800px; */
    height: ${(props) => props.height};
    box-sizing: border-box;
    ${(props) => props.padding ? `padding: ${props.padding}` : ''};
    ${(props) => props.margin ? `margin: ${props.margin}` : ''};
    ${(props) => props.bg ? `background-color: ${props.bg}` : ''};
    ${(props) => props.flex_space ? `
    display: flex;
    align-items: center;
    justify-content: space-between;
    ` : ''};
    ${(props) => props.flex_col ? `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ` : ''};
    ${(props) => props.pos ? `position: ${props.pos}` : ''}
    ${(props) => props.center ? `text-align: center` : ''};
    
`

export default Grid;