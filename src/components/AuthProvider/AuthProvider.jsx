import app from "../../../firebase.config";
import { createUserWithEmailAndPassword,  getAuth,  onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";




// const auth = getAuth(app);
export const AuthContext = createContext(null);
const auth = getAuth(app);

const Authprovider = ({children}) => {
    const[user,setUser]=useState(null);

    const createUser = (email,password)=> {
        return createUserWithEmailAndPassword(auth ,email,password);
    }
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut = () =>{
        return signOut(auth);
    }
useEffect( ()=>{
const unSubscribe = onAuthStateChanged(auth,currentUser=>{
    console.log('Changes',currentUser);
setUser(currentUser);
});
return () =>{
    return unSubscribe();
}

} ,[])
    const authinfo = {
        user,
        setUser,
        createUser,
        signIn,
        logOut,
        updateProfile
        
     }
    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;