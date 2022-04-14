
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as ImageActions } from "../redux/modules/image";

const Upload = (props) => {

    const fileInput = React.useRef();
    const dispatch = useDispatch()
    const is_uploading = useSelector(state => state.image)

    const [preview, setPreview] = useState(is_uploading)
    const [upPreview, setUpPreview] = useState(props.updating)

    const selecFile = (e) => {
        const reader = new FileReader()
        const file = fileInput.current.files[0]
        
        if (file === undefined) {
            return;
        }

        reader.readAsDataURL(file)

        reader.onloadend = () => {
            if (props.updating) {
                dispatch(ImageActions.upsetPreview({ preview: reader.result, file }))
            }
            else
                dispatch(ImageActions.setPreview({ preview: reader.result, file }))
        }
    }

    return (
        <React.Fragment>
            {/* <input ref={fileInput} type='file' onChange={selecFile} disabled={is_uploading} /> */}
            <input style={{ margin: '10px' }} ref={fileInput} type='file' onChange={selecFile} />
            {/* <Button _onClick={uploadFB}>업로드하기</Button> */}
        </React.Fragment>
    )
}

export default Upload;