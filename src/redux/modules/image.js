import { createAction, handleActions } from "redux-actions";
import produce from "immer";

// const UPLOADING = 'UPLOADING'
// const UPLOAD_IMAGE = 'UPLOAD_IMAGE'
const SET_PREVIEW = 'SET_PREVIEW'
const UPSET_PREVIEW = 'UPSET_PREVIEW'
const OUT_PREVIEW = 'OUT_PREVIEW'

// const uploading = createAction(UPLOADING, (uploading) => ({ uploading }))
// const uploadImage = createAction(UPLOAD_IMAGE, (image_url) => ({ image_url }))
const setPreview = createAction(SET_PREVIEW, (preview) => ({ preview }))
const upsetPreview = createAction(UPSET_PREVIEW, (preview) => ({ preview }))
const outPreview = createAction(OUT_PREVIEW, (preview) => ({ preview }))

const initialState = {
    baseURL: 'http://3.36.89.94',
    image_url: '',
    uploading: false,
    upuploading: false,
    preview: null,
    uppreview: null,
}

const uploadImageAX = (image) => {
    return async function (dispatch, getState, { history }) {

        console.log(image)

        dispatch(setPreview(image))

        // const imgref = ref(storage, `images/${image.name}`)

        // // console.log(imgref)

        // await uploadBytesResumable(imgref, image)

        // // console.log(image)

        // let downloadURL = await getDownloadURL(imgref)

        // dispatch(uploadImage(downloadURL))

        // console.log('File available at', downloadURL);

        // dispatch(uploading(false))
    }
}

export default handleActions({
    // [UPLOAD_IMAGE]: (state, action) => produce(state, (draft) => {
    //     draft.image_url = action.payload.image_url
    //     draft.uploading = false
    // }),
    // [UPLOADING]: (state, action) => produce(state, (draft) => {
    //     draft.uploading = action.payload.uploading
    // }),
    [SET_PREVIEW]: (state, action) => produce(state, (draft) => {
        draft.uploading = true
        draft.preview = action.payload.preview
        // console.log(draft.preview, action)
        draft.uploading = false
    }),
    [UPSET_PREVIEW]: (state, action) => produce(state, (draft) => {
        draft.upuploading = true
        draft.uppreview = action.payload.preview
        // console.log(draft.uppreview, action.payload)
        // draft.uploading = false
    }),
    [OUT_PREVIEW]: (state, action) => produce(state, (draft) => {
        draft.upuploading = false
        draft.uploading = false
        draft.uppreview = null
        draft.preview = null
    }),
}, initialState)

const actionCreators = {
    // uploadImage,
    uploadImageAX,
    setPreview,
    upsetPreview,
    outPreview,
}

export { actionCreators }