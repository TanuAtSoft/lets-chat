export const API_ROUTES = {
    SIGN_UP: {
        REGISTER: '/auth/register',
    },
    SIGN_IN: {
        LOGIN:'/auth/login',
        RESET_PASSWORD:'/auth/resetPasswordRequest'
    },
    FORGOT_PASSWORD:{
        FORGOT_PASSWORD:"/auth/forgotPassword"
    },
    CHAT:{
        CREATE_CHAT:"/chat",
        GET_CHAT:"/chat",
        FIND_CHAT:"/chat/find"
    },
    MESSAGE:{
        GET_MESSAGE:"/message",
        ADD_MESSAGE:"/message"
    },
    UPLOAD:{
        IMAGES:"/upload/images"
    },
    USER:{
        GET_USER:"/user",
        UPDATE_USER_PIC:"/updateUserPic",
        RESET_PASSWORD:"/auth/resetPassword"
    }
}