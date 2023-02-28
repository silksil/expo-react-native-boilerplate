import { initializeApp } from 'firebase/app'
import { initializeAuth, browserPopupRedirectResolver } from 'firebase/auth'
import { getReactNativePersistence } from 'firebase/auth/react-native'
import { getFirestore } from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'

// setup firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyAW_Wz7w0Fcr2EVpm_huDXX7peDHO_lFTE',
  authDomain: 'expo-boilerplate-1500d.firebaseapp.com',
  projectId: 'expo-boilerplate-1500d',
  storageBucket: 'expo-boilerplate-1500d.appspot.com',
  messagingSenderId: '416109210923',
  appId: '1:416109210923:web:c8e261cbddd686102ea96e',
  measurementId: 'G-52XEKHL098',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

/**
 * to get rid of async storage incompatibility with expo, initialize auth with the following method
 * @link https://github.com/firebase/firebase-js-sdk/issues/1847#issuecomment-915634151
 */
export const auth = initializeAuth(app, {
  persistence: [getReactNativePersistence(AsyncStorage)],
  popupRedirectResolver: browserPopupRedirectResolver,
})

/**
 * Initialize firestore and define typed helping collection function
 * @references
 * https://plainenglish.io/blog/using-firestore-with-typescript-in-the-v9-sdk-cf36851bb099
 * https://medium.com/swlh/using-firestore-with-typescript-65bd2a602945
 */
export const db = getFirestore(app)
