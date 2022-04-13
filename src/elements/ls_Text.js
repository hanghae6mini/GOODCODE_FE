import React from "react";
import styled from "styled-components";

const ls_Text = (props) => {
    const {bold, color, size, children, margin, align} = props;
    
    const styles = {bold: bold, color: color, size: size, margin: margin, align: align};
    return (
    <P {...styles}>
        {children}
    </P>)
}

ls_Text.defaultProps= {
    children: null,
    bold: false,
    color: 'black',
    size: '14px',
    margin: false,
    align:"center"
}

const P = styled.p`
    width: 120px;
    text-align: center;
    color: ${(props) => props.color};
    font-size: ${(props) => props.size};
    font-weight: ${(props) => (props.bold? "600" : "400")};
    ${(props) => (props.margin? `margin: ${props.margin};` : '')}
    `;

export default ls_Text;