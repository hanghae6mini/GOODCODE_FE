import React from "react";
import styled from "styled-components";
import {Text,Grid} from "./ls_index";

const ls_input = (props) => {
    const {label, placeholder, _onChange} = props;
    return (
        <React.Fragment>
            <Grid>
                <Text margin="0px">{label}</Text>
                <ElInput placeholder={placeholder} onChange={_onChange}/>
            </Grid>
        </React.Fragment>
    )
}

ls_input.defaultProps = {
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

export default ls_input; 