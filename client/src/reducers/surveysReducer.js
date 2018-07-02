import { FETCH_SURVEYS } from "../actions/types";

const surveysReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.value;
    default:
      return state;
  }
};

export default surveysReducer;
