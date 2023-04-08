import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyC9p4hSMDe2fT7o-9Ar5_pufd0yNoUow0w",
    authDomain: "gallery-69f20.firebaseapp.com",
    projectId: "gallery-69f20",
    storageBucket: "gallery-69f20.appspot.com",
    messagingSenderId: "444317630581",
    appId: "1:444317630581:web:b288b37f9e01fccca2b83c"
  };
  


const firebaseApp = initializeApp(firebaseConfig)

export const storage = getStorage(firebaseApp)

