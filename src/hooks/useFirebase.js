import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from "../pages/Login/Firebase/firebase.init";;

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const handlename = (e) => {
        setName(e.target.value)
    }
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleRegistration = (e) => {
        e.preventDefault();
        console.log('Registration on process');
        console.log(email, password);
        if (password.length < 6) {
            setError('Password should be at least 6 characters');
            return
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain two uppercase letters');
            return
        }
        isLogin ? processLogin(email, password) : registerNewUser(email, password)

    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log('From Login', user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                setError('');
                verifyEmail();
                addDisplayName();
            })
            .catch((error) => {
                // const errorCode = error.code;
                setError(error.message);
                // ..
            });
    }
    const handleResetPassword = () => {
        sendPasswordResetEmail(auth, email)
            .then((result) => {
                //...
            })
            .catch((error) => {
                setError(error.message);
                // ..
            });
    }
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setIsLoading(false));
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
            });
    }
    const addDisplayName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
        })
    }
    // handleing user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    //Logut impelementation
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;