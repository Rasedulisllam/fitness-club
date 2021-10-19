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
        signInWithPopup(auth,googleProvider)
            .then(result=> {
                setUser(result.user)
            })
            .catch(err => setErr(err.message))
            .finally(()=>setIsLoading(false))
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
        const {email,password,name}=data;
        createUserWithEmailAndPassword(auth, email, password)
            .then((createResult) => {
                setUser(createResult.user)
                updateUserName(name)
            })
            .catch((error) => {
               setErr(error.message)
            })
            .finally(()=>setIsLoading(false))
    }

    // user sign in system
    const loginUser=(data)=>{
        setIsLoading(true)
        const {email,password}=data;
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user)
            })
            .catch((error) => {
                setErr(error.message)
            })
            .finally(()=>setIsLoading(false))
    }

    // set obserbar on user
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setUser({})
            }
            setIsLoading(false)
          });
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
        loginUser,
        Logout,
    }
};

export default useFirebase;