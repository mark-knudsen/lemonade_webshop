import { combineReducers } from 'redux';
import lemonadesReducer from '../features/lemonadesSlice';
import cartReducer from '../features/cartSlice';
import profitReducer from '../features/profitSlice'; // new

const rootReducer = combineReducers({
  lemonades: lemonadesReducer,
  cart: cartReducer,
  profit: profitReducer, // new
});

export default rootReducer;
