import React from "react";
import styled from "styled-components";
import LsGrid from "../elements/LsGrid"
import LsText from "../elements/LsText"

const LsInput = (props) => {
    const {label, placeholder, _onChange} = props;
    return (
        <React.Fragment>
            <LsGrid>
                <LsText margin="0px">{label}</LsText>
                <ElInput placeholder={placeholder} onChange={_onChange}/>
            </LsGrid>
        </React.Fragment>
    )
}

LsInput.defaultProps = {
    label: null,
    placeholder: '텍스트를 입력하세요.',
    _onChange: () => {}
}

const ElInput = styled.input`
    border: 1px solid #212121;
    width: 300px;
    padding: 10px 4px;
    box-sizing: border-box;
    background-color: skyblue;
`;

export default LsInput; 