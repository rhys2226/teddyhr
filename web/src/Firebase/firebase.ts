import firebase from 'firebase/app';
import 'firebase/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyCx3wuPlEHcn_FPL1ZC0IXTC82FlCu75Cw",
    authDomain: "hrcloud-5568f.firebaseapp.com",
    projectId: "hrcloud-5568f",
    storageBucket: "hrcloud-5568f.appspot.com",
    messagingSenderId: "12049743442",
    appId: "1:12049743442:web:7d319fd317ffe1cb78298b"
}

export function collection(collection:any) {
    return firebase.firestore().collection(collection)
}


export function auth() {
    return firebase.auth()
}