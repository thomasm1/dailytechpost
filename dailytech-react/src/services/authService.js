
import axios from 'axios';
import { AUTH_BASE_URL } from '../config';
import { JWT_TOKEN } from '../config';

class AuthService {
    async register(values) { 
        try {
            const response = await axios.post(`${AUTH_BASE_URL}/users/auth/register`, {
                ...values, 
                email: values.email,
                password: values.password,
            });
            console.log("Registration successful!", response);
        } catch (error) {
            console.error("Error registering user: ", error);
            // alert("Error registering user. Please check the console for details.");
        }
    }

    async login(values) { 
        try {
            const response = await axios.post(`${AUTH_BASE_URL}/users/auth/login`, {
                ...values, 
                usernameOrEmail: values.usernameOrEmail,
                password: values.password,
            });
            localStorage.setItem('accessToken', response.data.accessToken);
            console.log("login successful!", response.data);
        } catch (error) {
            console.error("Error logging in: ", error);
            alert("Error logging in. Please check the console for details.");
        }
    }
 
}

// export default AuthService
const authService = new AuthService();
export default authService;  // Single export
