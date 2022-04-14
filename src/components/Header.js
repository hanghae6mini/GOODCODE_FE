import React from "react";
import { Button } from "../elements";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
import { history } from "../redux/configStore";
// import { Grid, Text } from "../elements/index";


const Header = () => {

    const tokenOver = () => {
        localStorage.removeItem('token')
        history.replace('/')
        window.alert('로그아웃 되었습니다')
        window.location.reload()
    }

    return (
        <React.Fragment>
            <div style={{ backgroundColor: "grey", width: '100%', height: '20vh', display: "flex", position: "fixed", left: '0px', top: '0px', justifyContent: "space-between" }}>
                <Text color='#33d' margin='auto' size='50px' bold>좋<span style={{ fontSize: '16px', margin: '5px', color: '#eee' }}>은</span>코<span style={{ fontSize: '16px', margin: '5px', color: '#eee' }}>딩</span></Text>
                <div style={{padding: '20px' }} onClick={tokenOver}><Button height='100px' width='100px' rad='20px'>로그아웃</Button></div>
            </div>
        </React.Fragment>
    )
}

export default Header;