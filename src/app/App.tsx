import { useIsValid } from "../shared/model/useIsValid";
import { MyForm } from "../shared/ui/MyForm";
import { StatusBar } from "../widgets/ui/StatusBar/StatusBar";

export const App = () => {
  
  const isEmailValid = useIsValid('21ewdwq12', 'email')
  console.log(isEmailValid);
  
  
  return (
    <>
      <StatusBar />
      <MyForm value="" inputType="password" props/>
    </>
  )
}