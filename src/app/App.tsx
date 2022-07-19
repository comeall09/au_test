import { EmailBar } from "../widgets/ui/EmailBar/ui/EmailBar";
import { PasswordBar } from "../widgets/ui/PasswordBar/ui/PasswordBar";
import { SelectCountryBar } from "../widgets/ui/SelectCity/ui/SelectCityBar";
import { StatusBar } from "../widgets/ui/StatusBar/StatusBar";
import s from './app.module.scss'

export const App = () => {  
  return (
    <div className={s.mainPage}>
      <div className={s.mainPageWrapper}>
        <StatusBar />
        <SelectCountryBar />
        <PasswordBar />
        <EmailBar />
      </div>
    </div>
  )
}