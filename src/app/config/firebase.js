import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyBwFj1wO-y02NSrspb_u7U6Koce9NhDOlE',
    authDomain: 'recital-maker.firebaseapp.com',
    databaseURL: 'https://recital-maker.firebaseio.com',
    projectId: 'recital-maker',
    storageBucket: 'recital-maker.appspot.com',
    messagingSenderId: '329088742035',
    appId: '1:329088742035:web:0a62d60584aa9e5ad51366',
    measurementId: 'G-DJBX158GEG',
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
