export interface UserMetaData{
    creationTime:string,
    lastSignInTime:string,
}
export interface multiFactorInfo{
    displayName:string | null,
    factorId:string,
    enrollmentTime:string,
    uid:string,
}
export interface multiFactorUser{
    enrolledFactor:multiFactorInfo
}
export interface userInfo{
    displayName:string | null,
    email:string | null,
    phoneNumber:string | null,
    photoURL: string | null,
    providerId:string,
    uid:string    
}
export interface User {
    displayName: string | null,
    email: string | null,
    emailVerified: boolean,
    isAnonymous:boolean,
    metadata: UserMetaData,
    multiFactor:multiFactorUser,
    phoneNumber: string | null,
    photoURL: string | null,
    providerData: userInfo[],
    providerId:string,
    refreshToken:string,
    tenantId:string | null,
    uid:string,

}