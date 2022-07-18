import { useState } from "react";
import { sortData } from "../model/sortData";
import s from "./selectCity.module.scss"

export const SelectCountryBar = () => {
  const cities = sortData()
  
	const [selectedCity, setSelectedCity] = useState('')
	const selectCity = (city: string) => {
		setSelectedCity(city)
	}

  return (
    <>
      <div className={s.selectWrap}>
        <p>Ваш город</p>
        {/* <div className={s.innerWrap}> */}
          <select className={s.selectBtn}>
            {cities.map(city => <option onClick={() => selectCity(city.city)} selected={city.city === selectedCity && true}>{city.city}</option>)}
          </select>
        {/* </div> */}
      </div>
    </>
  )
}