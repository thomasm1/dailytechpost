import  { combineReducers } from 'redux'; 
import userReducer from  './users_reducer';
import postReducer from  './posts_reducer';

const rootReducer =  combineReducers({ 
  user: userReducer,
    post: postReducer
});

export default rootReducer;
 

