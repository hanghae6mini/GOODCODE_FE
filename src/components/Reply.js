import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Input, Text } from "../elements";
import { actionCreators as FeedActions } from "../redux/modules/feed";


const Reply = ({ data }) => {

    const repls = useSelector((state) => state.feed.repls)

    console.log(repls)

    const dispatch = useDispatch()

    console.log(data)

    let repl = ''

    const replcomment = () => {
        dispatch(FeedActions.Add_CommentAX({ feedId: data.feedId, content: repl }))
    }

    const delcomment = (com_id) => {
        dispatch(FeedActions.del_commentAX(com_id))
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

            {repls.map((v, i) =>
                <div key={i} style={{ display: "flex", flexDirection: "row", marginTop: '10px' }}>
                    <Grid flex_space width='35vw' margin='10px auto'>
                        <Text>{v.nickname}</Text>
                        <Text>{v.comment}</Text>
                    </Grid>
                    <Grid width='50px' margin='0 0 0 10px'>
                        <Button width='40px' rad='20px' _onClick={e => delcomment(v.commentId)}>X</Button>
                    </Grid>
                </div>
            )}

        </Grid>
    )
}

export default Reply;