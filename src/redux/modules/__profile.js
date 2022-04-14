import axios from "axios";

const roadProfile = "profile/roadProfile";
const sendProfile = "profile/sendProfile";

function __Profile(roadProfile , paylaod){
    return {type: roadProfile, profile : {
        intro : "",
        address : "",
        email : "",
        homepage : ""
    }};
}

function setProfile()

const initialState = {
    nickname: "",
    intro : "",
    address :"",
    email :"",
    homepage :""
}


export const __setProfile =
  (paylaod) =>
    async (dispatch, getState, { history }) => {
      const {
        data: { profile },
      } = await axios.post("http://3.36.89.94/api/user/main", paylaod)

    };

    export const __profile =
  (paylaod) =>
    async (dispatch, getState, { history }) => {
      const {
        data: { profile },
      } = await axios.get("http://3.36.89.94/api/user/main", profile )

      

    profile : true
    
    };
