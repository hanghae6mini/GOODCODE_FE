import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Input, Text } from "../elements";
import { actionCreators as FeedActions } from "../redux/modules/feed";

import Comment from "./comment";

const Reply = ({ data }) => {

    const repls = useSelector((state) => state.feed.repls)

    const dispatch = useDispatch()

    let repl = ''

    const replcomment = () => {
        dispatch(FeedActions.Add_CommentAX(data.feedId, repl))
    }

    React.useEffect(() => {
        dispatch(FeedActions.get_commentAX({ feedId: data.feedId }))
    }, [])

    return (
        <Grid flex_col width='90%' margin='0 auto 100px auto'>
            <Grid flex_space>
                <Input _onChange={e => repl = e.target.value} />
                <Button width='100px' margin='0 0 0 10px' _onClick={replcomment}>작성</Button>
            </Grid>

            {repls.map((v, i) => v.feedId == data.feedId ?
                <div key={i} style={{ display: "flex", flexDirection: "row", marginTop: '10px' }}>
                    <Comment data={v} />
                </div>
                : '')}

        </Grid>
    )
}

export default Reply;