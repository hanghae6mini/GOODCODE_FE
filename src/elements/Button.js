import React from 'react';
import styled from 'styled-components'

const Button = (props) => {

    const { text, _onClick, children, margin, width, rad } = props

    const styles = {
        margin,
        width,
        rad,
    }

    return (
        <React.Fragment>
            <ELButton {...styles} onClick={_onClick}>{text ? text : children}</ELButton>
        </React.Fragment>
    )
}

Button.defaultProps = {
    children: null,
    text: false,
    margin: false,
    width: '100%',
    rad: false,
    _onClick: () => { }
}

const ELButton = styled.button`
    width: ${(props) => props.width};
    ${(props) => (props.margin ? `margin: ${props.margin}` : '')};
    background-color: #212121;
    color: #fff;
    padding: 12px 0px;
    box-sizing: border-box;
    border: none;
    border-radius: ${(props) => props.rad};
    :hover {
        background-color: #666;
        cursor: pointer;
    }
`

export default Button;