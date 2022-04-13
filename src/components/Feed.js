import styled from "styled-components";

import React, { useState } from "react";
import { Button, Grid, Image, Input, Text } from "../elements/index";
import { actionCreators as FeedActions } from "../redux/modules/feed";
import { useDispatch, useSelector } from "react-redux";
import Reply from "./Reply";
import Upload from "../shared/Upload";


const Feed = (props) => {

    const image = useSelector((state) => state.image)

    const [replyBox, setReplyBox] = useState(false)
    const [updating, setUpdating] = useState(false)
    const [preview, setPreview] = useState(false)

    let Edit_content = ''

    // console.log(props)

    const dispatch = useDispatch()

    const setup = () => {
        setUpdating(!updating)
    }

    const updateFeed = () => {
        setReplyBox(false)
        setUpdating(false)

        if (image.updating) {
            // let dic = {
            //     feedId: props.data.feedId,
            //     content: props.data.content,
            //     image: props.data.image
            // }
            if (updating)
                dispatch(FeedActions.updatePostAX(...props))
        }
        else {
            let new_image = image.uppreview ? image.uppreview : null

            if (new_image) {
                let dic = {
                    feedId: props.data.feedId,
                    content: Edit_content,
                    image: new_image
                }
                if (updating)
                    dispatch(FeedActions.updatePostAX(dic))
            }
            else {
                let dic = {
                    feedId: props.data.feedId,
                    content: Edit_content
                }
                if (updating)
                    dispatch(FeedActions.updatePostAX(dic))
            }

            // let dic = {
            //     feedId: props.data.feedId,
            //     content: Edit_content,
            //     image: image.uppreview ? image.uppreview : `${image.baseURL}${props.data.image}`
            // }
        }
        // console.log(dic)

    }

    const delFeed = () => {
        setReplyBox(false)
        dispatch(FeedActions.delPostAX(props.data.feedId))
    }

    const reply = () => {
        setReplyBox(!replyBox)
    }

    // console.log(image, props)

    return (
        <Grid border='1px solid red' margin='0 0 50px 0'>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', margin: '10px 20px 0 0' }}>
                <Grid flex_space margin='0 0 0 20px'>{props.data.regDate}</Grid>
                <DelButton onClick={setup}>V</DelButton>
                <DelButton onClick={delFeed}>X</DelButton>
            </div>
            <Text >{props.data.userId}</Text>
            {props.data.image ? <Image src={
                updating && image.uppreview ? image.uppreview.preview : `${image.baseURL}${props.data.image}`
            }></Image> : null}
            {updating ?
                <Grid >
                    <Upload updating={updating} />
                    <Grid flex_space width='90%' margin='auto'>
                        <Input multiLine width='90%' max_width='90%' _onChange={e => Edit_content = e.target.value} />
                        <Button width='100px' height='180px' margin='0px 10px' _onClick={updateFeed}>수정</Button>
                    </Grid>
                </Grid>
                : <Text>{props.data.content}</Text>}
            <Button margin='10px' width='100px' _onClick={reply}>댓글</Button>
            {replyBox ? <Reply data={props.data} /> : null}
        </Grid>
    )
}

export default Feed;



const DelButton = styled.button`
    width: 35px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    
    background-color: #212121;
    color: #fff;
    margin:5px;
    box-sizing: border-box;
    border: none;
    border-radius: 20px;
    :hover {
        background-color: #888;
        cursor: pointer;
    }
`