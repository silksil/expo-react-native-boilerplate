// Helper to overwrite a type
// Usage:
//   type Props = OverwriteType<
//   IInput,
//   {
//   value?: string
//   }

export type OverwriteType<T, R> = Omit<T, keyof R> & R
