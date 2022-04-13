import { createAction, handleActions } from "redux-actions";
import { produce } from 'immer'
import axios from "axios";

import { actionCreators as ImageActions } from "./image";
import loginToken from '../module/__Login'




const GET_POST = 'GET_POST'
const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'
const DEL_POST = 'DEL_POST'

const GET_COMMENT = 'GET_COMMENT'
const ADD_COMMENT = 'ADD_COMMENT'
const DEL_COMMENT = 'DEL_COMMENT'



const getPost = createAction(GET_POST, (post_list) => ({ post_list }))
const addPost = createAction(ADD_POST, (post) => ({ post }))
const updatePost = createAction(UPDATE_POST, (post) => ({ post }))
const delPost = createAction(DEL_POST, (post) => ({ post }))

const get_comment = createAction(GET_COMMENT, (comment) => comment)
const add_comment = createAction(ADD_COMMENT, (comment) => comment)
const del_comment = createAction(DEL_COMMENT, (comment) => comment)

const testToken = localStorage.getItem('token')

const config = { 'Authorization': `Bearer ${testToken}` }

const initialState = {
    list: [],
    repls: [],
    baseURL: 'http://3.36.89.94',
    preview: { preview: '', size: '' },
}



const getPostAX = () => {
    return async function (dispatch, getState, { history }) {

        // const axData = await axios.get('http://localhost:3001/memo')
        // const axData = await axios.get('http://sparta-hs.shop/api/boardlist')

        axios.get(`${initialState.baseURL}/api/user/auth`, { headers: config })
            .then((res) => console.log(res))
            .catch((error) => console.log(error))


        await axios.get(`${initialState.baseURL}/api/feed`,
            {
                headers: config,
                params: { feedType: 'all' }
            }
        ).then((res) => {
            dispatch(getPost(res))
        }).catch((error) => {
            console.log('data : ', error.response.data)
            // console.log('status :', error.response.status)
            // console.log('header:', error.response.headers)
            // console.log('request:', error.request)
            // console.log('message:', error.message)
        })
    }
}

const addPostAX = (feed) => {
    return async function (dispatch, getState, { history }) {

        const formData = new FormData();

        console.log(feed)

        if (feed.image)
            formData.append('image', feed.image.file)
        formData.append('userId', feed.userId)
        formData.append('content', feed.content)

        axios.post(`${initialState.baseURL}/api/feed`, formData, { headers: config })
            .then((res) => {
                console.log(res)

                dispatch(addPost(feed))
                window.location.reload();
            }).catch((error) => {
                console.log(error.response.data)
            })

        // dispatch(ImageActions.outPreview())
    }
}

const updatePostAX = (feed) => {
    return async function (dispatch, getState, { history }) {

        console.log(feed)

        const formData = new FormData();

        if (feed.image)
            formData.append('image', feed.image.file)
        formData.append('feedId', feed.feedId)
        formData.append('content', feed.content)

        // console.log(feed.image.file)
        // console.log(feed.feedId)
        // console.log(feed.content)

        await axios.put(`${initialState.baseURL}/api/feed`, formData, { headers: config })
            .then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error.response.data)
            })

        dispatch(updatePost(feed))
        window.location.reload();

        // dispatch(ImageActions.outPreview())
    }
}

const delPostAX = (feed_id) => {
    return async function (dispatch, getState, { history }) {

        console.log((feed_id))


        axios.delete(`${initialState.baseURL}/api/feed`,
            {
                headers: config,
                data: { feedId: feed_id }
            }
        ).then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error.response.data)
        })

        dispatch(delPost(feed_id))
    }
}






const get_commentAX = ({ feedId }) => {
    return async function (dispatch, getState, { history }) {

        console.log(feedId)

        axios.get(`${initialState.baseURL}/api/feedcomment`,
            {
                headers: config,
                params: { feedId: feedId }
            })
            .then((res) => {
                console.log(res)
                dispatch(get_comment({ feedId, feed: res.data.result.feed }))
            }).catch((error) => {
                console.log('data : ', error.response.data)
            })
    }
}

const Add_CommentAX = (data) => {
    return async function (dispatch, getState, { history }) {

        console.log(data)

        const formData = new FormData()

        formData.append('comment', data.content)
        // formData.append('feedId', data.feedId)

        axios.post(`${initialState.baseURL}/api/feedcomment`, { comment: data.content },
            {
                headers: config,
                params: { feedId: data.feedId }
            })
            .then((res) => {
                console.log(res)
                dispatch(add_comment(data))
            }).catch((error) => {
                console.log(error.response.data)
            })

        // dispatch(add_comment(data))
    }
}

const del_commentAX = (commentId) => {
    return function (dispatch, getState, { history }) {
        console.log(commentId)

        axios.delete(`${initialState.baseURL}/api/feedcomment`,
            {
                headers: config,
                params: { commentId }
            })
            .then((res) => {
                dispatch(del_comment(commentId))
            }).catch((error) => {
                console.log(error.response.data)
            })
    }
}





export default handleActions(
    {
        [GET_POST]: (state, action) => produce(state, (draft) => {
            // console.log(action)
            // action.payload.post_list.sort((a, b) => (new Date(b.insert_dt).getTime() - new Date(a.insert_dt).getTime()))
            draft.list = action.payload.post_list.data.feedList
        }),
        [ADD_POST]: (state, action) => produce(state, (draft) => {
            // console.log(action.payload)
            draft.list.unshift(action.payload.post)
        }),
        [UPDATE_POST]: (state, action) => produce(state, (draft) => {
            let idx = state.list.findIndex((v) => (v.id === action.payload.post.id))
            // draft.list[idx] = 
            draft.list[idx] = action.payload.post
            console.log(draft.list[idx], action.payload)
        }),
        [DEL_POST]: (state, action) => produce(state, (draft) => {
            console.log(state, action)
            draft.list = state.list.filter((v) => v.feedId !== action.payload.post)
            // console.log(draft.list)
        }),



        [GET_COMMENT]: (state, action) => produce(state, (draft) => {
            draft.repls = action.payload.feed.filter((v) => v.feedId === action.payload.feedId + '')
        }),
        [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
            console.log(action.payload)

            // state.list.map((v, idx) => {
            //     if (v.id === action.payload.id) {

            //         let repl_info = []
            //         if (action.payload.repl_info) {
            //             repl_info.unshift(...action.payload.repl_info)
            //         }
            //         repl_info.unshift({
            //             name: 'aaa',
            //             repl: action.payload.repl
            //         })

            //         let dic = {
            //             id: action.payload.id,
            //             name: action.payload.name,
            //             image: action.payload.image,
            //             title: action.payload.title,
            //             repl_info: repl_info
            //         }

            //         draft.list[idx] = dic

            //         // console.log(new_list)
            //         // repl_info.unshift({ repl_info: { name: action.payload.name, repl: action.payload.repl } })
            //         // console.log(repl_info)
            //         // draft.list[idx] = ({ ...action.payload.repl_info, repl_info })
            //         // console.log(draft.list[idx])
            //     }
            //     return v;
            // })
            // console.log(draft.list[0])
        }),
        [DEL_COMMENT]: (state, action) => produce(state, (draft) => {
            console.log(state.repls, action.payload)

            draft.repls = state.repls.filter((v) => v.commentId !== action.payload)
        }),

    }, initialState
)


const actionCreators = {
    getPost,
    getPostAX,
    addPost,
    addPostAX,
    updatePost,
    updatePostAX,
    delPost,
    delPostAX,

    get_comment,
    get_commentAX,
    add_comment,
    Add_CommentAX,
    del_comment,
    del_commentAX,
}

export { actionCreators };