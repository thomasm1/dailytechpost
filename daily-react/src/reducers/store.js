import { configureStore } from '@reduxjs/toolkit'; 
import postReducer from './posts_reducer';
import userReducer from './users_reducer'; 

export default configureStore({  
  reducer: {
    post: postReducer,
    user: userReducer,
  },
});
