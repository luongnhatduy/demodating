import { ADD_NEW_TASK} from "./actionTypes";
let newTaskId = 0;

export const addNewTask = inputTaskName => {
  return {
    type: ADD_NEW_TASK,
    taskId: newTaskId++,
    taskName: inputTaskName
  };
};

