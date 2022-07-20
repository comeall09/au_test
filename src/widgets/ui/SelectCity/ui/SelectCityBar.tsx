import { useState } from "react";
import { sortData } from "../model/sortData";
import s from "./selectCity.module.scss";

export const SelectCityBar = () => {
  const cities = sortData();

  const [selectedCity, setSelectedCity] = useState("");
  const selectCity = (city: string) => {
    setSelectedCity(city);
  };

  return (
    <>
      <div className={s.selectWrap}>
        <p>Ваш город</p>
        <select className={s.selectBtn}>
          {cities.map((city) => (
            <option
              key={city.city}
              onClick={() => selectCity(city.city)}
              defaultChecked={city.city === selectedCity && true}
            >
              {city.city}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};