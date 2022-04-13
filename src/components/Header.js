import React from "react";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
// import { Grid, Text } from "../elements/index";


const Header = () => {
    return (
        <React.Fragment>
            <div style={{ backgroundColor: "grey", width: '100%', height: '15vh', display: "flex", position: "fixed", left: '0px', top: '0px' }}>
                <Text margin='auto' size='50px' bold>안녕</Text>
            </div>
        </React.Fragment>
    )
}

export default Header;