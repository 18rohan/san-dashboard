import {getAuth, onAuthStateChanged, signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth';

export const auth = getAuth();


export const UserSignup = (auth:any, email:string, password:string) =>{
    createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) =>{
    // Signed in 
    const user = userCredential.user;
    console.log(user);

})
.catch((error)=>{
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
})
}


export const UserSignin = (auth:any, email:string, password:string) =>{
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
    })
    .catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
    })
}

export const CheckAuthStatus = (auth:any, user:any) =>{
    onAuthStateChanged(auth, (user)=>{
        if(user){
            const uid = user.uid;
            console.log("User logged in with UID: ",uid);

        } else {
            // User is signed Out
             console.log("User is signed out");
        }
    })
}
