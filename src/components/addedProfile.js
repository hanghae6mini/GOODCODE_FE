import React from "react";
import styled from "styled-components";
import { Button, Grid, Input } from "../elements";


const addedProfile = (props) => {

    return (
        <Grid>
            <Pfdiv>intro : </Pfdiv>
            <input placeholder="intro" style={{ padding: '10px', margin: '10px auto', width: '80%', border: '0px' }} />
            <input placeholder="address" style={{ padding: '10px', margin: '10px auto', width: '80%', border: '0px' }} />
            <input placeholder="email" style={{ padding: '10px', margin: '10px auto', width: '80%', border: '0px' }} />
            <input placeholder="homepage" style={{ padding: '10px', margin: '10px auto', width: '80%', border: '0px' }} />
        </Grid>
    )
}


export default addedProfile;

const Pfdiv = styled.div`
    
`