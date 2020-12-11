const REQUEST = "REQUEST";
const SUCCESS = "SUCCESS";
const FAIL = "FAIL";

const request = () => ({ type: REQUEST });
const success = (userData) => ({ type: SUCCESS, userData });
const fail = () => ({ type: FAIL });

const initalState = { isLoading: false };

const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case REQUEST:
      return { isLoading: true };
    case SUCCESS:
      return { isLoading: false, userData: action.userData };
    case FAIL:
      return { isLoading: false };

    default:
      return state;
  }
};

export const authActions = {
  request,
  success,
  fail,
};

export default authReducer;
