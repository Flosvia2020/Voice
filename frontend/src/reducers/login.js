import * as login from "../actions/login";

const initalState = {
  isLoading: false,
};

const loginReducer = (state = initalState, action) => {
  switch (action.type) {
    case login.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        id: action.id,
        password: action.password,
      };
    case login.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.token,
        refreshToken: action.refreshToken,
      };
    default:
      return { ...state, isLoading: false };
  }
};

export default loginReducer;
