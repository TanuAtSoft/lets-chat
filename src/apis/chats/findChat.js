import { API_ROUTES } from "../api_routes";
import { apiRoot } from "../root";

export const findChat = (token,firstId,secondId) => {
    return apiRoot({ 
        url: `${process.env.REACT_APP_BASE_API_URL}${API_ROUTES.CHAT.FIND_CHAT}/${firstId}/${secondId}`,
        method: 'GET', 
        token
    });
}