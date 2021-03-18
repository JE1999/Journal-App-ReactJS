import { IPayload, IAction, AuthTypes } from "../../types/Reducers/Auth/authTypes";

const initialState: IPayload = {
    uid: '',
    displayName: ''
}

export const authReducer = (state = initialState, action: IAction) => {
    
    switch (action.type) {
        case AuthTypes.login:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case AuthTypes.logout:
            return initialState;

        default:
            return state;
    }

}
