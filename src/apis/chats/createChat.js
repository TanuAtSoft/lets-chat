import { API_ROUTES } from "../api_routes";
import { apiRoot } from "../root";

export const createChat = (token,data) => {  
    return apiRoot({ 
        url: `${process.env.REACT_APP_BASE_API_URL}${API_ROUTES.CHAT.CREATE_CHAT}`,
        method: 'POST', 
        data,
        token
    });
}