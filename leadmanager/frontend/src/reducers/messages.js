import { GET_MESSAGES, CREATE_MESSAGE } from "../actions/types";

const initalState = {};

export default function(state = initalState, action) {
  switch (action.payload) {
    case GET_MESSAGES:
      return action.payload;

    case CREATE_MESSAGE:
      return action.payload;

    default:
      return state;
  }
}
