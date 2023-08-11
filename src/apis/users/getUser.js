import { API_ROUTES } from "../api_routes";
import { apiRoot } from "../root";

export const getUser = (token,userId) => {  
    return apiRoot({ 
        url: `${process.env.REACT_APP_BASE_API_URL}${API_ROUTES.USER.GET_USER}/${userId}`,
        method: 'GET', 
        token
    });
}