import { API_BASE_URL } from '../../config';
import { 
    USERS_LIST 
} from '../types';

import axios from 'axios';


export async function getUsers() {
    const request =  await axios.get(`${API_BASE_URL}/users`) 

    return {
        type: USERS_LIST,
        payload: request
    }
}
