import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { RootState } from 'src/store/store'

/**
 * Use throughout your app instead of plain `useSelector`
 *
 * @resources
 * https://redux-toolkit.js.org/tutorials/typescript
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
