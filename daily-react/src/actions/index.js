import {
    POSTS_LIST,
    USERS_LIST
} from '../types';

import axios from 'axios';

export function getPosts() {
    const request = axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data);

    return {
        type: POSTS_LIST,
        payload: request
    }
}


export function getUsers() {
    const request = axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data);

    return {
        type: USERS_LIST,
        payload: request
    }
}