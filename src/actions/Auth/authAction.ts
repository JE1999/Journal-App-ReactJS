import Swal from 'sweetalert2'

import { firebase, googleAuthProvider } from '../../firebase/firebaseConfig'
import { AuthTypes } from '../../types/Reducers/Auth/authTypes'
import { setLoadingAction, unSetLoadingAction } from '../Ui/uiAction'
import { noteLogoutAction } from '../Notes/notesAction'

type LoginType = string | undefined | null

const errorSweetAlert = (error: string) => (
    Swal.fire({
        title: 'Error!',
        text: error,
        icon: 'error',
    })
)


export const startLoginEmailPasswordAction = (email: string, password: string) => {
    return (dispatch: Function) => {
        
        dispatch( setLoadingAction() )
        
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) =>{
                dispatch(
                    authLoginAction(user?.uid, user?.displayName)
                )
            })
            .catch(error => {
                console.log(error)
                errorSweetAlert(error)
            })
            .finally(() => dispatch( unSetLoadingAction() ))
    }
}


export const startRegisterWithEmailPasswordNameAction = (email: string, password: string, name: string) => {
    return (dispatch: Function) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then( async({user}) => {
                
                await user?.updateProfile({displayName: name})

                dispatch(
                    authLoginAction(user?.uid, user?.displayName)
                )
            })
            .catch(error => {
                console.log(error)
                errorSweetAlert(error)
            })
    } 
}


export const startGoogleLoginAction =  () => {
    return (dispatch: Function) => {
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({user}) => {
                dispatch(
                    authLoginAction(user?.uid, user?.displayName)
                )
            })
    }
}


export const authLoginAction = (uid: LoginType, displayName: LoginType) => ({
    type: AuthTypes.login,
    payload: {
        uid,
        displayName
    }
})


export const startLogoutAction = () => {
    return async(dispatch: Function) => {
        await firebase.auth().signOut()

        dispatch( logoutAction() )
        dispatch( noteLogoutAction() )
    }
}

export const logoutAction = () => ({
    type: AuthTypes.logout
})