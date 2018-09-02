const ADD_ITEM = 'myapp/cart/ADD_ITEM';

const initialState = {
  items: []
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items: [...state.items, ...action.payload.item]
      };
    default:
      return state;
  }
}

export function addItem(item) {
  return { type: ADD_ITEM, payload: item };
}
