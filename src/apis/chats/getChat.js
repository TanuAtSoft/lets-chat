import { API_ROUTES } from "../api_routes";
import { apiRoot } from "../root";

export const getChat = (token,userId) => {  
    return apiRoot({ 
        url: `${process.env.REACT_APP_BASE_API_URL}${API_ROUTES.CHAT.GET_CHAT}/${userId}`,
        method: 'GET', 
        token
    });
}