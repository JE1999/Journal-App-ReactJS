export enum AuthTypes {
    login = '[Auth] Login',
    logout = '[Auth] Logout',
}

export interface IPayload {
    uid: string;
    displayName: string;
}

export interface IAction {
    type: AuthTypes;
    payload: IPayload;
}

export interface IAuthState {
    uid: string;
    name: string;
}

export interface IAuth {
    auth: IAuthState
}