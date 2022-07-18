export const isPasswordValid = (password: string) => {
  const passRegex = new RegExp(/^[0-9a-zA-Z]{5,}$/)
  return passRegex.test(password)
}