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
    const [loading, setLoading] = useState(true);

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
        isLogin ? processLogin(email, password) : registerNewUser(email, password)

    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user);
                setError('');
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setError('');
                addDisplayName();
            })
            .catch((error) => {
                setError(error.message);

            });
    }
    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        return signInWithPopup(auth, googleProvider)
            .finally(() => { setIsLoading(false) });
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
        user, name, email, password, error, isLoading,
        isLoading, handlePassword, handleEmail, handlename,
        signInUsingGoogle, processLogin,
        logOut
    }
}

export default useFirebase;