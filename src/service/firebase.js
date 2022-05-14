import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
    apiKey: "AIzaSyDHZNMhxeMfhsqPC37_bLOcPVR5yX-uFPU",
    authDomain: "gb-9-61a77.firebaseapp.com",
    databaseURL: "https://gb-9-61a77-default-rtdb.firebaseio.com",
    projectId: "gb-9-61a77",
    storageBucket: "gb-9-61a77.appspot.com",
    messagingSenderId: "140664066785",
    appId: "1:140664066785:web:1d73e35a0307821ad1dda0",
    measurementId: "G-JKWKF8X6SX"
};

const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;