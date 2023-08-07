import { API_ROUTES } from "../api_routes";
import { apiRoot } from "../root";

export const signUp = (data) => { 
    return apiRoot({ 
        url: `${process.env.REACT_APP_BASE_API_URL}${API_ROUTES.SIGN_UP.REGISTER}`,
        method: 'POST', 
        data,
    });
}