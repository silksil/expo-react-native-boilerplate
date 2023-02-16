import { useDispatch } from 'react-redux'
import { AppDispatch } from 'src/store/store'

/**
 * Use throughout your app instead of plain `useDispatch`
 *
 * @resources
 * https://redux-toolkit.js.org/tutorials/typescript
 */
export const useAppDispatch: () => AppDispatch = useDispatch
