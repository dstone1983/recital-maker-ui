import firebase from '../../config/firebase'
import { ReduxStore } from '../../store/store'
import { auth_success } from '../../store/authReducer'

const { dispatch } = ReduxStore

export const provider = new firebase.auth.GoogleAuthProvider()

export const handleLogin = async () => {
    const auth = await firebase
        .auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            return firebase.auth().signInWithPopup(provider)
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code
            var errorMessage = error.message
            console.log(errorCode)
            console.log(errorMessage)
        })

    if (auth && auth.user) {
        const userObj = generateCustomUserObj(auth.user)
        dispatch(auth_success(userObj))
    }
}

export const generateCustomUserObj = user => {
    return {
        photoURL: user.photoURL,
        displayName: user.displayName,
        email: user.email,
        uid: user.uid,
    }
}
