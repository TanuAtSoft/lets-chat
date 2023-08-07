import { API_ROUTES } from "../api_routes";
import { apiRoot } from "../root";

export const resetPasswordRequest = (token,data) => {  
    return apiRoot({ 
        url: `${process.env.REACT_APP_BASE_API_URL}${API_ROUTES.SIGN_IN.RESET_PASSWORD}`,
        method: 'POST', 
        data,
        token
    });
}