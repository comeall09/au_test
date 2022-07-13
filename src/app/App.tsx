import { useIsValid } from "../shared/model/useIsValid";

export const App = () => {
  
  const isEmailValid = useIsValid('21ewdwq12', 'password')
  console.log(isEmailValid);
  
  
  return (
    <>
    </>
  )
}