import { initializeApp } from "firebase/app";
import{getAuth} from 'firebase/auth'

const firebaseConfig = {

  apiKey: "AIzaSyCJ_z-YIdSuESv4rtlxE9tUvXL_vCHLR9E",

  authDomain: "adminproject-d586d.firebaseapp.com",

  projectId: "adminproject-d586d",

  storageBucket: "adminproject-d586d.appspot.com",

  messagingSenderId: "545024029055",

  appId: "1:545024029055:web:4029d7dbb1fb518f95ea4a"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth()