const LOAD_REQUEST = "LOAD_REQUEST";
const LOAD_SUCCESS = "LOAD_SUCCESS";
const LOAD_POST = "LOAD_POST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const CREATE_POST = "CREATE_POST";
const EDIT_POST = "EDIT_POST";
const DELETE_POST = "DELETE_POST";

const loadRequest = () => ({ type: LOAD_REQUEST });
const loadSuccess = (postList) => ({ type: LOAD_SUCCESS, postList });
const creaetPost = (postData) => ({ type: CREATE_POST, postData });
const eidtPost = (postData) => ({ type: EDIT_POST, postData });
const deletePost = (postId) => ({ type: DELETE_POST, postId });
const loadPost = (postId) => ({ type: LOAD_POST, postId });
const loadPostSuccess = (postData) => ({ type: LOAD_POST_SUCCESS, postData });

const initalState = {
  postList: [],
  postData: "",
  isLoading: false,
  postDetailLoading: true,
  repleLoading: false,
};

const postReducer = (state = initalState, action) => {
  switch (action.type) {
    case LOAD_REQUEST:
      return { ...state, isLoading: true };
    case LOAD_POST:
      return { ...state, postDetailLoading: true };
    case LOAD_SUCCESS:
      return {
        ...state,
        postList: action.postList.reverse(),
        isLoading: false,
      };
    case LOAD_POST_SUCCESS:
      return { ...state, postData: action.postData, postDetailLoading: false };
    default:
      return state;
  }
};

export const postActions = {
  loadRequest,
  loadSuccess,
  creaetPost,
  eidtPost,
  deletePost,
  loadPost,
  loadPostSuccess,
};
export const postTypes = {
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_POST,
  LOAD_POST_SUCCESS,
};
export default postReducer;
