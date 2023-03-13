import { UserCredential } from 'firebase/auth'

// ----------------------------------------------------------------------

export type ActionMapType<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key
      }
    : {
        type: Key
        payload: M[Key]
      }
}

export type AuthUserType = null | Record<string, any>

export type AuthStateType = {
  isAuthenticated: boolean
  isInitialized: boolean
  user: AuthUserType
  error: { message: string } | null
  isLoading: boolean
}

export type FirebaseContextType = {
  method: 'firebase'
  isAuthenticated: boolean
  isInitialized: boolean
  user: AuthUserType
  error: { message: string } | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<UserCredential>
  register: (email: string, password: string) => void
  logout: () => void
}
