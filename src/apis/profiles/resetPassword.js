import { API_ROUTES } from "../api_routes";
import { apiRoot } from "../root";

export const resetPassword = (token,data) => {  
    return apiRoot({ 
        url: `${process.env.REACT_APP_BASE_API_URL}${API_ROUTES.USER.RESET_PASSWORD}`,
        method: 'POST', 
        data,
        token
    });
}