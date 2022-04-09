import React from "react";
import { Grid, Text } from "../elements";


const Header = () => {
    return (
        <React.Fragment>
            <Grid height='15vh' bg='#777' is_flex>
                <Text margin='auto' size='50px' bold>안녕</Text>
            </Grid>
        </React.Fragment>
    )
}

export default Header;