import { useState } from 'react'
import s from '../styles/mainStyles.module.scss'

export const AcceptionBar = (setDataChanged: any) => {

  const [isChecked, setIsChecked] = useState(false)

  const handleChange = () => (
    setIsChecked(!isChecked)
  )

  return (
    <>
      <div className={s.checkBoxWrap}>
        <p>Я согласен</p>
        <div className={s.checkBoxBar}>
          <input
            type="checkbox"
            className={s.checkboxInput}
            checked={isChecked}
            onChange={(handleChange)}
          />
          <p>принимать актуальную информацию на емейл</p>
        </div>
      </div>
    </>
  )
} 