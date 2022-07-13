import { useIsPasswordValid } from './useIsPasswordValid';
import { useIsEmailValid } from './useIsEmailValid';
export const useIsValid = (value: string, valueType: string): boolean => {
  if(valueType === 'password'){
    return useIsPasswordValid(value)
  }
  return useIsEmailValid(value)
}