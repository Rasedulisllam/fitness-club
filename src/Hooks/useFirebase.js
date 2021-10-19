import { useEffect, useState } from 'react';
import InitializeAuthentication from '../pages/authentication/Firebase/Firebase.init';
import { GoogleAuthProvider,getAuth, signInWithPopup,onAuthStateChanged,signOut,createUserWithEmailAndPassword,updateProfile, signInWithEmailAndPassword } from "firebase/auth";

InitializeAuthentication();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();
const useFirebase = () => {
    const [user,setUser]=useState({})
    const [err,setErr]=useState('')
    const [IsLoading,setIsLoading]=useState(true)

    // google sign in handle
    const googleSignIn=()=>{
        setIsLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // update user profile name
    const updateUserName=(name)=>{
        updateProfile(auth.currentUser, {
            displayName:name
          }).then((res) => {
              auth.getInstance().getCurrentUser().reload()
          }).catch((error) => {
            setErr(error.message)
          });
    }

    // create new user system
    const createNewUser=(data)=>{
        setIsLoading(true)
        const {email,password}=data;
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user sign in system
    const loginUser=(data)=>{
        setIsLoading(true)
        const {email,password}=data;
        return signInWithEmailAndPassword(auth, email, password)
    }

    // set obserbar on user
    useEffect(()=>{
        setIsLoading(true)
       const unSubscribe= onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
          });

          return ()=>unSubscribe;
    },[])

    // logout system
    const Logout=()=>{
        setIsLoading(true)
        signOut(auth).then(() => {

          }).catch((error) => {
                setErr(error.message)
          })
          .finally(()=>{
              setIsLoading(false)
          })

    } 
    // console.log(user)
    // console.log(err)
    return {
        user,
        setUser,
        err,
        setErr,
        IsLoading,
        setIsLoading,
        googleSignIn,
        createNewUser,
        updateUserName,
        loginUser,
        Logout,
    }
};

export default useFirebase;