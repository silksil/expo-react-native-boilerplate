import { createContext, useEffect, useReducer, useCallback } from 'react'
import { initializeApp } from 'firebase/app'
import {
  signOut,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  initializeAuth,
  browserPopupRedirectResolver,
} from 'firebase/auth'
import { getFirestore, collection, doc, getDoc, setDoc } from 'firebase/firestore'
import { ActionMapType, AuthStateType, AuthUserType, FirebaseContextType } from './types'
import { getReactNativePersistence } from 'firebase/auth/react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

enum Types {
  INITIAL = 'INITIAL',
}

type Payload = {
  [Types.INITIAL]: {
    isAuthenticated: boolean
    user: AuthUserType
    error: { message: string } | null
    isLoading: boolean
  }
}

type ActionsType = ActionMapType<Payload>[keyof ActionMapType<Payload>]

const initialState: AuthStateType = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
  error: null,
  isLoading: false,
}

const reducer = (state: AuthStateType, action: ActionsType) => {
  if (action.type === Types.INITIAL) {
    return {
      isInitialized: true,
      isAuthenticated: action.payload.isAuthenticated,
      user: action.payload.user,
      error: action.payload.error,
      isLoading: action.payload.isLoading,
    }
  }
  return state
}

export const AuthContext = createContext<FirebaseContextType | null>(null)

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
const firebaseApp = initializeApp(firebaseConfig)

/**
 * to get rid of async storage incompatibility with expo, initialize auth with the following method
 * @link https://github.com/firebase/firebase-js-sdk/issues/1847#issuecomment-915634151
 */
const AUTH = initializeAuth(firebaseApp, {
  persistence: [getReactNativePersistence(AsyncStorage)],
  popupRedirectResolver: browserPopupRedirectResolver,
})

// Initialize firestore and define typed helping collection function
const DB = getFirestore(firebaseApp)

type AuthProviderProps = {
  children: React.ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const initialize = useCallback(() => {
    try {
      onAuthStateChanged(AUTH, async user => {
        if (user) {
          const userRef = doc(DB, 'users', user.uid)

          const docSnap = await getDoc(userRef)

          const profile = docSnap.data()

          dispatch({
            type: Types.INITIAL,
            payload: {
              isAuthenticated: true,
              isLoading: false,
              error: null,
              user: {
                ...user,
                ...profile,
                role: 'admin',
              },
            },
          })
        } else {
          dispatch({
            type: Types.INITIAL,
            payload: {
              isAuthenticated: false,
              user: null,
              isLoading: false,
              error: { message: 'Something went wrong' },
            },
          })
        }
      })
    } catch (error) {
      dispatch({
        type: Types.INITIAL,
        payload: {
          isAuthenticated: false,
          user: null,
          isLoading: false,
          error: null,
        },
      })
    }
  }, [])

  useEffect(() => {
    initialize()
  }, [initialize])

  // LOGIN
  const login = (email: string, password: string) =>
    signInWithEmailAndPassword(AUTH, email, password)

  // REGISTER
  const register = (email: string, password: string, firstName: string, lastName: string) =>
    createUserWithEmailAndPassword(AUTH, email, password).then(async res => {
      const userRef = doc(collection(DB, 'users'), res.user?.uid)

      await setDoc(userRef, {
        uid: res.user?.uid,
        email,
        displayName: `${firstName} ${lastName}`,
      })
    })

  // LOGOUT
  const logout = () => signOut(AUTH)

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'firebase',
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
