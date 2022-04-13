import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Grid, Image, Input, Text } from "../elements";
import { actionCreators as FeedActions } from "../redux/modules/feed";
import { actionCreators as ImageActions } from "../redux/modules/image";

import styled from 'styled-components'
import Feed from "../components/Feed";
import Upload from "../shared/Upload";
import Profile from "../components/Profile";



const Main = () => {

    // const history

    const feed_list = useSelector((state) => state.feed)
    const image = useSelector((state) => state.image)

    const [profile, setProfile] = useState(false)

    let content = ''

    console.log(feed_list.list, image)

    const dispatch = useDispatch()

    const AllFeed = () => {

        // dispatch(FeedActions.addPostAX())
    }

    React.useEffect(() => {
        dispatch(FeedActions.getPostAX())
    }, [])

    function Test(e) {
        setProfile(true)
    }

    function Feedup() {
        let dic = {
            userId: 'gkrtjs2020',
            image: image.preview ? image.preview : null,
            content,
        }

        // console.log(dic)
        dispatch(FeedActions.addPostAX(dic))
    }

    function profile_ok() {
        setProfile(false)
    }

    function profile_cancel() {
        setProfile(false)
    }

    return (
        <React.Fragment>
            <Grid width='20vw' margin='170px 0px 0px 10px' height='820px' bg='#999' pos='fixed'>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Grid><Image shape='rectangle'>
                    </Image></Grid>
                    <Text margin='10px' size='20px'>
                        니모
                    </Text>
                    {profile ?
                        <Grid>
                            <Profile profile={profile} />
                            <Grid flex_space padding='10px'>
                                <Button margin='0px 5px' _onClick={profile_ok}>O</Button>
                                <Button margin='0px 5px' _onClick={profile_cancel}>X</Button>
                            </Grid>
                        </Grid>

                        : <Grid>
                            <Text margin='10px' size='20px'>
                                니모니모 스펀지썽
                            </Text>
                            <Button width='40px' rad='50px' _onClick={Test}>+</Button>
                        </Grid>
                    }
                </div>
            </Grid>
            <Grid flex_space padding='16px'>

                <Grid width='50vw' bg='#999' margin='160px auto'>
                    <Button width='50%' height='8vh' bg='#000' _onClick={AllFeed}>왼쪽</Button>
                    <Button width='50%' height='8vh' bg='#555'>오른쪽</Button>

                    <Grid width='50vw'>
                        <Upload />
                        {image.preview !== null ? <Image src={image.preview.preview} /> : null}

                        <Grid padding='20px'>
                            <Input multiLine width='100%' _onChange={e => content = e.target.value} />
                            <Button margin='10px auto' _onClick={Feedup}>올리기</Button>
                        </Grid>
                    </Grid>

                    <Grid flex_col width='100%' bg='#777'>
                        <Grid flex_col>
                            <Grid width='90%' margin='50px auto' bg='#eee'>
                                {feed_list.list.map((v, i) => {
                                    return (
                                        <div key={i}>
                                            <Feed data={v}></Feed>
                                        </div>
                                    )
                                })}
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

                {/* <div style={{ width: '20vw', height: '80vh', backgroundColor: '#999', position: 'fixed', right: '10px', top: '170px' }}>
                    <Grid><Text>추가기능</Text></Grid>
                </div> */}
            </Grid>
        </React.Fragment>
    )
}

export default Main;


const Wrap = styled.div`
    background-color: black;
`