import React from 'react'
import styled from 'styled-components'
import { Grid, Text } from './index'

const Input = (props) => {

    const { label, placeholder, width, max_width, _onChange, type, multiLine, value } = props

    if (multiLine) {
        return (
            <Grid>
                {label && <Text margin='0px'>{label}</Text>}
                <ElTextarea rows={10} width={width} max_width={max_width} placeholder={placeholder} onChange={_onChange}></ElTextarea>
            </Grid>
        )
    }

    return (
        <React.Fragment>
            <Grid>
                {label && <Text margin='0px'>{label}</Text>}
                <ElInput type={type} width={width} placeholder={placeholder} onChange={_onChange}></ElInput>
            </Grid>
        </React.Fragment>
    )
}

Input.defaultProps = {
    multiLine: false,
    label: false,
    placeholder: '텍스트를 입력해주세요',
    width: '100%',
    max_width: '100%',
    type: 'text',
    _onChange: () => { },
    value: '',
}

const ElTextarea = styled.textarea`
    border: 0px;
    width: ${(props) => props.width};
    max-width: ${(props) => props.max_width};
    min-width: 30%;
    max-height: 200px;
    min-height: 100px;
    padding: 12px 4px;
    box-sizing: border-box;
    resize: none;
`

const ElInput = styled.input`
    border: 0px;
    width: ${(props) => props.width};
    padding: 12px 4px;
    box-sizing: border-box;
`

export default Input;