import { isPasswordValid } from './isPasswordValid';
import { isEmailValid } from './isEmailValid';
export const useIsValid = (value: string, valueType: string): boolean => {
  if(valueType === 'password'){
    return isPasswordValid(value)
  }
  return isEmailValid(value)
}