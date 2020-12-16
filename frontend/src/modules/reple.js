const CREATE_REPLE = "CREATE_REPLE";
const DELETE_REPLE = "DELETE_REPLE";

const createReple = (data) => ({ type: CREATE_REPLE, data });
const deleteReple = (id) => ({ type: DELETE_REPLE, id });

const initalState = {};
const repleReducer = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_REPLE:
      return { ...state, action };
    case DELETE_REPLE:
      return { ...state, action };
    default:
      return state;
  }
};

export const repleActions = {
  createReple,
  deleteReple,
};
export const repleTypes = {
  CREATE_REPLE,
  DELETE_REPLE,
};

export default repleReducer;
