import { Fetch_sku } from '../../actionTypes';
const initialState = {
  skuList: []
};

export default function(state = initialState, action) {
  const skuList = action.payload;
  switch (action.type) {
  case Fetch_sku:
    return {
      ...state,
      skuList: [
        ...state.skuList,
        ...skuList
      ]
    };
  default:
    return initialState;
  }
}