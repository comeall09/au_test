import { useIsValid } from "../shared/model/useIsValid";
import { MyForm } from "../shared/ui/MyForm";

export const App = () => {
  
  const isEmailValid = useIsValid('21ewdwq12', 'email')
  console.log(isEmailValid);
  
  
  return (
    <>
      <MyForm value="" inputType="password" props/>
    </>
  )
}