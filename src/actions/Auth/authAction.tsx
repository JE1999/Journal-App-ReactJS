import { firebase, googleAuthProvider } from '../../firebase/firebaseConfig'
import { AuthTypes } from '../../types/Reducers/Auth/authTypes'

type LoginType = string | undefined | null

export const startLoginEmailPasswordAction = (email: string, password: string) => {
    return (dispatch: any) => {
        
    }
}

export const startGoogleLoginAction =  () => {
    return (dispatch: any) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(
                    authLoginAction(user?.uid, user?.displayName)
                )
            })
    }
}

export const authLoginAction = (uid: LoginType, displayName: LoginType) => {
    return {
        type: AuthTypes.login,
        payload: {       
            uid,
            displayName
        }
    }
}