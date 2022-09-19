import React, {useEffect, useState} from 'react';
import { AuthContext } from 'context/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';
import {User as FirebaseUser} from 'firebase/auth';
import { auth } from '../firebase/firebase-config';;

interface IProps{
    children?:JSX.Element;
}
export const AuthProvider:React.FC<React.ReactNode> = (children:React.ReactNode) =>{
    const [user, setUser] = useState<FirebaseUser | null>(null);
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(firebaseUser:any)=>{
            setUser(firebaseUser);
        });

        return unsubscribe;
        
        
    },[])
    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>
}   