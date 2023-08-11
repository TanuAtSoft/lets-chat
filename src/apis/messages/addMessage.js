import { API_ROUTES } from "../api_routes";
import { apiRoot } from "../root";

export const addMessage = (token,data) => {  
    return apiRoot({ 
        url: `${process.env.REACT_APP_BASE_API_URL}${API_ROUTES.MESSAGE.ADD_MESSAGE}`,
        method: 'POST', 
        data,
        token
    });
}