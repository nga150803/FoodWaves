import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCq0u7aPNikbD_Vnlt5C7Gwr613yT4QlIM",
  authDomain: "restaurantapp-6afd9.firebaseapp.com",
  databaseURL: "https://restaurantapp-6afd9-default-rtdb.firebaseio.com",
  projectId: "restaurantapp-6afd9",
  storageBucket: "restaurantapp-6afd9.appspot.com",
  messagingSenderId: "291458828729",
  appId: "1:291458828729:web:674e4639e1788ec6d04e68",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
