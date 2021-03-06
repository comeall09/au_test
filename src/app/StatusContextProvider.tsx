import React, { useState } from "react"
import { AcceptionBar } from "../widgets/ui/AcceptionBar/AcceptionBar"
import { EmailBar } from "../widgets/ui/EmailBar/ui/EmailBar"
import { PasswordBar } from "../widgets/ui/PasswordBar/ui/PasswordBar"
import { SelectCityBar } from "../widgets/ui/SelectCity/ui/SelectCityBar"
import { StatusBar } from "../widgets/ui/StatusBar/StatusBar"
import s from "./mainStyles.module.scss";

export const StatusContext = React.createContext({} as any)

export const StatusContextProvider = () => {

  const [fullDate, setFullDate] = useState(new Date().toLocaleString("ru").split(","))
  const [date, time] = fullDate;

  const [isReady, setIsReady] = useState(false)
  const handleClick = (e: any) => {
    e.target.blur();
    if(isChangedStatus){
      setIsReady(true)
      setFullDate(new Date().toLocaleString("ru").split(","))
      toggleChangedStatus(false)
    } else return false
  };

  const [isChangedStatus, setIsChangedStatus] = useState(false)
  const toggleChangedStatus = (value: boolean) => {    
    setIsChangedStatus(value)
  }

  return (
    <StatusContext.Provider value={{isChangedStatus, toggleChangedStatus}}>
          <StatusBar />
          <SelectCityBar />
          <PasswordBar />
          <EmailBar />
          <AcceptionBar />
          <div className={s.dataControlWrap}>
            <button onClick={(e) => handleClick(e)} className={s.changeBtn}>
              Изменить
            </button>
            <p className={s.btnInfo}>
              {isReady && `последние изменения ${date} в ${time}`}
              {!isReady && 'сохраните изменения'}
            </p>
          </div>
    </StatusContext.Provider>
  )
}