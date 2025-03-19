import {
    POSTS_LIST
} from '../types';

 const PostsReducer =  (state = {}, action) => {
    switch (action.type) {
        case POSTS_LIST:
            return { ...state, posts: action.payload }
        default:
            return state;
    }
}
export default PostsReducer;