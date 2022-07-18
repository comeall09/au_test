import { MyBlock } from "../shared/ui/MyBlock/MyBlock";
import { MyInput } from "../shared/ui/MyInput";
import { SelectCountryBar } from "../widgets/ui/SelectCity/ui/SelectCityBar";
import { StatusBar } from "../widgets/ui/StatusBar/StatusBar";
import s from './app.module.scss'

export const App = () => {  
  return (
    <div className={s.mainPage}>
      <div className={s.mainPageWrapper}>
        <StatusBar />
        <SelectCountryBar />
      </div>
    </div>
  )
}