export enum UiTypes {
    setLoading = '[Ui] Set Loading',
    unSetLoading = '[Ui] Un set Loading',

    setError = '[Ui] Set Error',
    unSetError = '[Ui] Un Set Error',
}

export interface IPayload {
    loading: boolean;
    error: string | null;
}

export interface IAction {
    type:
        UiTypes.setLoading | 
        UiTypes.unSetLoading |
        UiTypes.setError |
        UiTypes.unSetError;
    payload: IPayload;
}