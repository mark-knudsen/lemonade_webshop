import { combineReducers } from 'redux';
import lemonadesReducer from '../features/lemonadesSlice';
import cartReducer from '../features/cartSlice';

const rootReducer = combineReducers({
  lemonades: lemonadesReducer,
  cart: cartReducer,
});

export default rootReducer;
