import { API_ROUTES } from "../api_routes";
import { apiRoot } from "../root";

export const forgotPassword = (data) => {  
    return apiRoot({ 
        url: `${process.env.REACT_APP_BASE_API_URL}${API_ROUTES.FORGOT_PASSWORD.FORGOT_PASSWORD}`,
        method: 'POST', 
        data,
    });
}