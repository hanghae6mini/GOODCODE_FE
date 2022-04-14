import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
// import { Grid, Text } from "../elements/index";


const Header = () => {
    return (
        <React.Fragment>
            <div style={{ backgroundColor: "grey", width: '100%', height: '15vh', display: "flex", position: "fixed", left: '0px', top: '0px' }}>
                <Text color='#33d' margin='auto' size='50px' bold>좋<span style={{fontSize:'16px',margin:'5px',color:'#eee'}}>은</span>코<span style={{fontSize:'16px',margin:'5px',color:'#eee'}}>딩</span></Text>
            </div>
        </React.Fragment>
    )
}

export default Header;