import React from "react";
import styled from "styled-component"

const lgInput = (props) => {
    const {width, color, size, children} = props;

    const styles = {width: width, color: color, size: size}
    return (
        <Input {...styles}>
        </Input>
    )
}

export default lgInput;


lgInput.defaultProps= {
    children: null,
    width : "80%",
    color : "skyblue",
    size : "12px"
}

const Input = styled.input`

`

// /api/user/signup