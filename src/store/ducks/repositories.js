/**
 *  Action Types
 */
export const Types = {
    REQUEST: 'LOAD_REPOSITORIES_REQUEST',
    SUCCESS: 'LOAD_REPOSITORIES_SUCCESS',
    FAILURE: 'LOAD_REPOSITORIES_FAILURE',
}


/**
 *  Reducers
 */
const INITIAL_STATE = {
    data: [],
    loading: false,
    error: false,
};

export default function repositories(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.REQUEST:
            return { ...state, loading: true }
        case Types.SUCCESS:
            return { ...state, data: action.payload.data, loading: false, error: false }
        case Types.FAILURE:
            return { ...state, loading: false, error: true}
        default:
            return state
    }
}

/**
 *  Action Creators
 */
export const Creators = {
    loadRepositoriesRequest: () => ({
        type: Types.REQUEST,
    }),
    loadRepositoriesSuccess: data => ({
        type: Types.SUCCESS,
        payload: { data },
    }),
    loadRepositoriesFailure: () => ({
        type: Types.FAILURE, 
    }),
    
}