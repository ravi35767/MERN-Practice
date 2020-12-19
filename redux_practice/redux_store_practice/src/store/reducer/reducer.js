import { combineReducers } from 'redux';
import loginReducer from './login_reducer';
import signUpReducer from './signup_reducer';

// const store = createStore(reducer);
const mainReducer = combineReducers({
	login: loginReducer,
	signup: signUpReducer,
});

export default mainReducer;
