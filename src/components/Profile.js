import React from "react";
import { Button, Grid, Input } from "../elements";


const Profile = (props) => {

    // console.log(props)

    return (
        <Grid>
            <input placeholder="intro" style={{ padding: '10px', margin: '10px auto', width: '80%', border: '0px' }} />
            <input placeholder="address" style={{ padding: '10px', margin: '10px auto', width: '80%', border: '0px' }} />
            <input placeholder="email" style={{ padding: '10px', margin: '10px auto', width: '80%', border: '0px' }} />
            <input placeholder="homepage" style={{ padding: '10px', margin: '10px auto', width: '80%', border: '0px' }} />
            
        </Grid>
    )
}


export default Profile;