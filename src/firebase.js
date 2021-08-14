import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDG6yyN4R5mbx_DTBOCrEGuqNa07xScR28",
    authDomain: "mikes-pizza-c8851.firebaseapp.com",
    projectId: "mikes-pizza-c8851",
    storageBucket: "mikes-pizza-c8851.appspot.com",
    messagingSenderId: "401351296911",
    appId: "1:401351296911:web:f3c6ed4489b6ff0c0cadfa"
})

export const auth = app.auth()
export const db = app.firestore()

export default app