import React from 'react';
import styled from 'styled-components';


const Ls_Button = (props) => {
    const {text, _onClick} = props;
    return(
        <React.Fragment>
            <ElButton onClick={_onClick} >{text}</ElButton>
        </React.Fragment>
    )
}

Ls_Button.defaultProps = {
    text: "텍스트",
    _onClick: () => {}
}


const ElButton = styled.button`
    width: 100%;
    background-color: lightblue;
    color: white;
    padding: 10px 0px;
    box-sizing: border-box;
    border: none;
    text-align: center;
    margin: 5px;
    width: 60%;
`;

export default Ls_Button;