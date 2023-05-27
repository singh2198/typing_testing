import * as types from "./action.type";

const initial = {
  str: [],
  average: [],
  wpm: 0,
  accuracy: 0,
};

export const typereducer = (state = initial, { type, payload }) => {
  switch (type) {
    case types.ADD: {
      return {
        ...state,
        str: payload,
      };
    }

    case types.AVERAGE: {
      return {
        ...state,
        average: [...state.average, payload],
      };
    }

    case types.WPMTHR: {
      return {
        ...state,
        wpm: payload,
      };
    }
    case types.ACCUTHR: {
      return {
        ...state,
        accuracy: payload,
      };
    }

    default:
      return state;
  }
};
