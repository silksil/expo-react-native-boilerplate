import * as yup from 'yup'

const emailValidation = yup.string().email('Invalid email').required('Email is required')

/**
 * schema for a one form input for email
 */
export const signUpSchema = yup.object().shape({
  email: emailValidation,
  password: yup.string().required('Password is required'),
  confirmPassword: yup.string().test({
    name: 'confirmPassword',
    message: 'Passwords must match',
    test() {
      const { password, confirmPassword } = this.parent
      if (password && confirmPassword !== password) {
        return false
      }
      return true
    },
  }),
})

export const signInSchema = yup.object().shape({
  email: emailValidation,
  password: yup.string().required('Password is required'),
})
