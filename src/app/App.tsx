import { StatusBar } from "../widgets/ui/StatusBar/StatusBar";
import s from './app.module.scss'

export const App = () => {  
  return (
    <div className={s.mainPage}>
      <div className={s.mainPageWrapper}>
        <StatusBar status='somestatus'/>
      </div>
    </div>
  )
}