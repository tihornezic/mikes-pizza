import {createContext, useContext, useState, useEffect} from 'react'
import {auth, db} from '../firebase'
import firebase from 'firebase/app'

export const AuthContext = createContext()

export const facebookProvider = new firebase.auth.FacebookAuthProvider()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)


    // auth functions
    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }

    const logout = () => {
        return auth.signOut()
    }

    const resetPassword = (email) => {
        return auth.sendPasswordResetEmail(email)
    }

    const updateEmail = (email) => {
        return currentUser.updateEmail(email)
    }

    const updatePassword = (password) => {
        return currentUser.updatePassword(password)
    }

    const facebookAuth = (provider) => {
        return firebase
            .auth()
            .signInWithPopup(provider)
            .then((res) => {
                return res.user
            })
            .catch((err) => {
                return err
            })
    }

    // 
    // database functions
    const setPayment = (paymentIntent, orderAddress, order) => {
        db
            .collection('users')
            .doc(currentUser?.uid)
            .collection('orders')
            .doc(paymentIntent.id)
            .set({
                orderAddress: orderAddress,
                order: order,
                amount: paymentIntent.amount,
                created: paymentIntent.created,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
    }

    const getPayment = (setOrders) => {
        db
            .collection('users')
            .doc(currentUser.uid)
            .collection('orders')
            .orderBy('createdAt', 'desc')
            .onSnapshot(snapshot => (
                setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                })))
            ))
    }

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        facebookAuth,

        setPayment,
        getPayment
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    auth.onAuthStateChanged(user => {
        setCurrentUser(user)
    })

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}