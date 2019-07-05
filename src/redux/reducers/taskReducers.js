import { ADD_NEW_TASK } from "../action/actionTypes";

const initialState = {
  taskName: []
};

export const taskReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return {
        ...state,
        taskName: action.taskName
      };
    default:
      return state;
  }
};
