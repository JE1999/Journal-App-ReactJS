import { UiTypes } from "../../types/Reducers/Ui/uiTypes";

interface IPayload {
    loading: boolean;
    error: boolean;
}

interface IAction {
    type: UiTypes.loading | UiTypes.error;
    payload: IPayload;
}

const initialState: IPayload = {
    loading: false,
    error: false
}

export const uiReducer = (state = initialState, action: IAction) => {

    switch (action.type) {
        case UiTypes.loading:
            return {
                loading: action.payload.loading
            }

        case UiTypes.error:
            return {
                error: action.payload.error
            }
    
        default:
            return state;
    }

}
