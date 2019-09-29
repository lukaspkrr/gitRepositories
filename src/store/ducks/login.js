/**
 *  Action Types
 */
export const Types = {
    REQUEST: 'lOGIN_REQUEST',
    SUCCESS: 'LOGIN_SUCCESS',
    FAILURE: 'LOGIN_FAILURE',
}


/**
 *  Reducer
 */
const INITIAL_STATE = {
    user: {
        username: null,
        name: null,
        avatar: null,
        company: null,
        blog: null,
        location: null,
        email: null,
    },
    error: false,
    loading: false,
};

export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.REQUEST:
            return { loading: true }
        case Types.SUCCESS:
            return { 
                ...state, 
                user: {
                    username: action.payload.data.login,
                    name: action.payload.data.name,
                    avatar: action.payload.data.avatar_url,
                    company: action.payload.data.company,
                    blog: action.payload.data.blog,
                    location: action.payload.data.location,
                    email: action.payload.data.email,
                },
                error: false, 
                loading: false 
            }
            case Types.FAILURE:
                    return { ...state, error: true, loading: false }
        default:
        return state
    }
}

/**
 *  Action Creators
 */
 export const Creators = {
    loginRequest: username => ({
        type: Types.REQUEST,
        payload: { username },
    }),
    loginSuccess: data => ({
        type: Types.SUCCESS,
        payload: { data },
    }),
    loginFailure: () => ({
        type: Types.FAILURE, 
    }),
 }