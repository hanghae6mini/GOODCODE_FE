import React from "react";
import styled from "styled-components";
import { Ls_Text, Ls_Grid } from "./ls_index";

const Ls_Input = (props) => {
    const { label, placeholder, _onChange } = props;
    return (
        <React.Fragment>
            <Ls_Grid>
                <Ls_Text margin="0px">{label}</Ls_Text>
                <ElInput placeholder={placeholder} onChange={_onChange} />
            </Ls_Grid>
        </React.Fragment>
    )
}

Ls_Input.defaultProps = {
    label: null,
    placeholder: '텍스트를 입력하세요.',
    _onChange: () => { }
}

const ElInput = styled.input`
    border: 1px solid #212121;
    width: 300px;
    padding: 10px 4px;
    box-sizing: border-box;
    background-color: skyblue;
`;

export default Ls_Input; 