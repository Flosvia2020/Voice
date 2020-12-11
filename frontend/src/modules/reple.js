const LOAD_REPLE_REQUEST = "LOAD_REPLE_REQUEST";
const LOAD_REPLE_SUCCESS = "LOAD_REPLE_SUCCESS";
const CREATE_REPLE = "CREATE_REPLE";
const EDIT_REPLE = "EDIT_REPLE";
const DELETE_REPLE = "DELETE_REPLE";

const loadRequest = () => ({ type: LOAD_REPLE_REQUEST });
const loadSuccess = () => ({ type: LOAD_REPLE_SUCCESS });
const createReple = (data) => ({ type: CREATE_REPLE, data });
