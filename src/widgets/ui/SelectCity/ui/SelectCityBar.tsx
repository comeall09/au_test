import { useContext, useState } from "react";
import { StatusContext } from "../../../../app/StatusContextProvider";
import { sortData } from "../model/sortData";
import s from "./selectCity.module.scss";

export const SelectCityBar = () => {
  const cities = sortData();

  const selectCity = () => {
    toggleChangedStatus(true)
  };
  
  const statusContext = useContext(StatusContext)
  const [isChangedStatus, toggleChangedStatus] = [statusContext.isChangedStatus, statusContext.toggleChangedStatus]
  return (
    <>
      <div className={s.selectWrap}>
        <p>Ваш город</p>
        <select onChange={() => selectCity()} className={s.selectBtn}>
          {cities.map((city) => (
            <option key={city.city}>{city.city}</option>
          ))}
        </select>
      </div>
    </>
  );
};