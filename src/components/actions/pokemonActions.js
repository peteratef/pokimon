import {
  CHANGE_FILTER,
  ON_INIT_FUNCTION,
} from "./action-types/pokemon-actions";

//add cart action
export const initFunction = () => {
  return async (dispatch, getState) => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
      .then((response) => response.json())
      .then((data) => {
        // dispatch(changeValue(user));

        dispatch({
          type: ON_INIT_FUNCTION,
          items: data.results,
        });
      });
  };
};
export const changeFilter = (value) => {
  return async (dispatch, getState) => {
    const state = getState();
    let filteredProducts = [];

    if (value.length > 0) {
      filteredProducts = state.items.filter((each) => {
        return each.name.includes(value);
      });
    } else {
      filteredProducts = state.items;
    }

    dispatch({
      type: CHANGE_FILTER,
      filteredProducts,
    });
  };
};
