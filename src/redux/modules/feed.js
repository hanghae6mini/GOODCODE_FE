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
const UP_COMMENT = 'UP_COMMENT'
const DEL_COMMENT = 'DEL_COMMENT'



const getPost = createAction(GET_POST, (post_list) => ({ post_list }))
const addPost = createAction(ADD_POST, (post) => ({ post }))
const updatePost = createAction(UPDATE_POST, (post) => ({ post }))
const delPost = createAction(DEL_POST, (post) => ({ post }))

const get_comment = createAction(GET_COMMENT, (comment) => comment)
const add_comment = createAction(ADD_COMMENT, (comment) => comment)
const up_comment = createAction(UP_COMMENT, (comment) => comment)
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

        axios.put(`${initialState.baseURL}/api/feed`, formData, { headers: config })
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
                // params: { feedId: feedId }
            })
            .then((res) => {
                console.log(res)
                dispatch(get_comment(res.data.result.feed))
            }).catch((error) => {
                console.log('data : ', error.response.data)
            })
    }
}

const Add_CommentAX = (feedId, repl) => {
    return async function (dispatch, getState, { history }) {

        console.log(feedId, repl)

        const formData = new FormData()

        formData.append('comment', repl)
        // formData.append('feedId', data.feedId)

        const user = await axios.get(`${initialState.baseURL}/api/user`, { headers: config })

        axios.post(`${initialState.baseURL}/api/feedcomment`, { comment: repl },
            {
                headers: config,
                params: { feedId }
            })
            .then((res) => {
                console.log(res)
                dispatch(add_comment({ nickname: user.data.user.nickname, feedId, repl }))
            }).catch((error) => {
                console.log(error.response.data)
            })

        // dispatch(add_comment(data))
    }
}

const up_commentAX = (com) => {
    return function (dispatch, getState, { history }) {
        console.log(com)

        axios.patch(`${initialState.baseURL}/api/feedcomment`, { comment: com.comment }, { headers: config })
            .then((res) => console.log(res))
            .catch((error) => console.log(error))

        dispatch(up_comment({ commentId: com.commentId, comment: com.comment }))
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
            console.log(state, action.payload)

            let idx = state.list.findIndex((v) => (v.feedId === action.payload.post.feedId))
            
            console.log(idx)

            if (action.payload.post.image)
                draft.list[idx] = { ...state.list[idx], feedId: action.payload.post.feedId, content: action.payload.post.content, image: action.payload.post.image.preview }
            else
                draft.list[idx] = { ...state.list[idx], feedId: action.payload.post.feedId, content: action.payload.post.content }

            console.log(draft.list[idx], action.payload)
        }),
        [DEL_POST]: (state, action) => produce(state, (draft) => {
            console.log(state, action)
            draft.list = state.list.filter((v) => v.feedId !== action.payload.post)
            // console.log(draft.list)
        }),



        [GET_COMMENT]: (state, action) => produce(state, (draft) => {
            draft.repls = action.payload
            // draft.repls = action.payload.feed.filter((v) => v.feedId === action.payload.feedId + '')
        }),
        [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
            console.log(state.repls, action.payload)

            let dic = [...state.repls, { nickname: action.payload.nickname, feedId: action.payload.feedId, comment: action.payload.repl }]

            console.log(dic)

            draft.repls = dic
        }),
        [UP_COMMENT]: (state, action) => produce(state, (draft) => {
            console.log(state.repls, action.payload)

            draft.repls = state.repls.map((v) => {
                if (v.commentId === action.payload.commentId)
                    return { ...v, comment: action.payload.comment }
                return v
            })

            console.log(draft.repls)
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
    up_comment,
    up_commentAX,
    del_comment,
    del_commentAX,
}

export { actionCreators };