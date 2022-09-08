import {
  CHANGE_FILTER,
  ON_INIT_FUNCTION,
} from "../actions/action-types/pokemon-actions";

const initState = {
  items: [],
  fitlteredItems: [],
  total: 0,
};
const cartReducer = (state = initState, action) => {
  console.log(action.items, "action");
  switch (action.type) {
    case ON_INIT_FUNCTION:
      return {
        ...state,
        items: action.items,
      };

    case CHANGE_FILTER:
      return {
        ...state,
        fitlteredItems: action.filteredProducts,
      };
    default:
      return state;
  }
};

export default cartReducer;
