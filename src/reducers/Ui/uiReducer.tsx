import { UiTypes, IPayload, IAction } from "../../types/Reducers/Ui/uiTypes";

const initialState: IPayload = {
    loading: false,
    error: null
}

export const uiReducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case UiTypes.setLoading:
            return {
                ...state,
                loading: action.payload
            }
        
        case UiTypes.unSetLoading:
            return {
                ...state,
                loading: false
            }

        case UiTypes.setError:
            return {
                ...state,
                error: action.payload
            }
    
        case UiTypes.unSetError:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }

}
