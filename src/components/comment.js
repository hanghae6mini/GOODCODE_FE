import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Input, Text } from "../elements";

import { actionCreators as FeedActions } from "../redux/modules/feed";

const Comment = ({ data }) => {

    const reply = useSelector((state) => state)

    const dispatch = useDispatch()

    const [commen, setCommen] = useState(false)

    console.log(data)
    
    let changeComment = data.comment

    const upChange = () => {
        setCommen(!commen)
    }

    const upcomment = (com) => {
        setCommen(false)
        dispatch(FeedActions.up_commentAX({ commentId: data.commentId, comment: changeComment }))
    }

    const delcomment = () => {
        dispatch(FeedActions.del_commentAX(data.commentId))
    }

    return (
        <Grid flex_space>
            {/* <Input></Input> */}

            <Grid flex_space width='40vw' margin='10px auto'>
                <Grid width='40vw'><Text>{data.nickname}</Text></Grid>
                {commen ?
                    <Grid flex_space width='200vw'>
                        <input defaultValue={data.comment} onChange={e => changeComment = e.target.value} style={{ border: '0px', padding: '12px 4px', boxSizing: 'border-box', resize: 'none' }}></input>
                        <Button width='30px' margin='0 10px' rad='20px' _onClick={upcomment}></Button>
                    </Grid>
                    : <Grid width='100vw'><Text margin='10px 0px'>{data.comment}</Text></Grid>}

                <Grid flex_space width='50px' margin='0 0 0 10px'>
                    <Button margin='5px 5px' bg width='50px' rad='20px' _onClick={e => upChange()}>🖊️</Button>
                    <Button margin='5px 5px' bg width='50px' rad='20px' _onClick={e => delcomment()}>❌</Button>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Comment;