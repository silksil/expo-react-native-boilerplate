import * as yup from 'yup'

/**
 * schema for a one form input for email
 */
export const emailSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
})
// export interface EmailSchemaType extends yup.InferType<typeof emailSchema> {}
