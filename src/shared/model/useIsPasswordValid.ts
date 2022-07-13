export const useIsPasswordValid = (password: string): boolean => {
  if(/\d/.test(password) && /[a-zA-Z]/.test(password)) return true
  else return false
}