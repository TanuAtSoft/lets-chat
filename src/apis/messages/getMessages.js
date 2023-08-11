import { API_ROUTES } from "../api_routes";
import { apiRoot } from "../root";

export const getMessages = (token,id) => {  
    return apiRoot({ 
        url: `${process.env.REACT_APP_BASE_API_URL}${API_ROUTES.MESSAGE.GET_MESSAGE}/${id}`,
        method: 'GET', 
        token
    });
}