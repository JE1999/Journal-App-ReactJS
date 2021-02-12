import { UiTypes } from '../../types/Reducers/Ui/uiTypes'

export const setErrorAction = (error: string) => ({
    type: UiTypes.setError,
    payload: error
})

export const unSetErrorAction = () => ({
    type: UiTypes.unSetError,
})
