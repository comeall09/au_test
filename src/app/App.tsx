import { useIsValid } from "../shared/model/useIsValid";

export const App = () => {
  
  const isEmailValid = useIsValid('21ewdwq12', 'email')
  console.log(isEmailValid);
  
  
  return (
    <>
    </>
  )
}