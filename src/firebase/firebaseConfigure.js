import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore,collection } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAVXU4PMwyUPBieYU2uWrRfVQf_9BL7wHU",
    authDomain: "twitter-1df39.firebaseapp.com",
    projectId: "twitter-1df39",
    storageBucket: "twitter-1df39.appspot.com",
    messagingSenderId: "968315020270",
    appId: "1:968315020270:web:c53b08bc8a416f4b12e4ff"
  };
  const twiApp = initializeApp(firebaseConfig);
  const twiAuth=getAuth(twiApp);
  const twiProvider=new GoogleAuthProvider(twiApp);
  const twiDB=getFirestore(twiApp);
  const twiColl=collection(twiDB,'post');
  const twiStore=getStorage(twiApp);

  export {twiAuth,twiProvider,twiDB,twiColl,twiStore};