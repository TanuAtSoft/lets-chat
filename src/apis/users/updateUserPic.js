import { API_ROUTES } from "../api_routes";
import { apiRoot } from "../root";

export const updateUserPic = (token,userId,data) => {  
    console.log("id",`${process.env.REACT_APP_BASE_API_URL}user/${API_ROUTES.USER.UPDATE_USER_PIC}/${userId}`)
    return apiRoot({ 
        url: `${process.env.REACT_APP_BASE_API_URL}/user${API_ROUTES.USER.UPDATE_USER_PIC}/${userId}`,
        method: 'PUT', 
        data,
        token
    });
}