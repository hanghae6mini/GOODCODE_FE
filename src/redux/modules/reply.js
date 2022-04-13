import axios from "axios"
import produce from "immer"
import { handleActions } from "redux-actions"
import { createAction } from "redux-actions"


const ADD_COMMENT = 'ADD_COMMENT'



const add_comment = createAction(ADD_COMMENT, (comment) => comment)


const initialState = {
    list: [],
}

const Add_CommentAX = (data) => {
    return async function (dispatch, getState, { history }) {

        dispatch(add_comment(data))
    }
}


export default handleActions({
    [ADD_COMMENT]: (state, action) => produce(state, (draft) => {
        console.log(action)
        draft.list.unshift({ [action.payload.id]: { name: action.payload.name, repl: action.payload.repl } })
    }),
}, initialState,
)

const actionCreators = {
    add_comment,
    Add_CommentAX,
}

export { actionCreators }