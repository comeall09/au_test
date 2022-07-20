import { useState } from "react";
import { AcceptionBar } from "../widgets/ui/AcceptionBar/AcceptionBar";
import { EmailBar } from "../widgets/ui/EmailBar/ui/EmailBar";
import { PasswordBar } from "../widgets/ui/PasswordBar/ui/PasswordBar";
import { SelectCityBar } from "../widgets/ui/SelectCity/ui/SelectCityBar";
import { StatusBar } from "../widgets/ui/StatusBar/StatusBar";
import s from "./app.module.scss";

export const App = () => {
  
  const [fullDate, setFullDate] = useState(new Date().toLocaleString("ru").split(","))
  const [date, time] = fullDate;
  const handleClick = (e: any) => {
    e.target.blur();
    setFullDate(new Date().toLocaleString("ru").split(","))
  };

  return (
    <div className={s.mainPage}>
      <div className={s.mainPageWrapper}>
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
            {date && time && `последние изменения ${date} в ${time}`}
            {!date && 'сохраните изменения'}
          </p>
        </div>
      </div>
    </div>
  );
};