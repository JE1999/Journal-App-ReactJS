import { UiTypes } from '../../types/Reducers/Ui/uiTypes'

export const setLoadingAction = () => ({
    type: UiTypes.setLoading,
})

export const unSetLoadingAction = () => ({
    type: UiTypes.unSetLoading,
})

export const setErrorAction = (error: string) => ({
    type: UiTypes.setError,
    payload: error
})

export const unSetErrorAction = () => ({
    type: UiTypes.unSetError,
})
