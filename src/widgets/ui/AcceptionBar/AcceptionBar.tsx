import { useContext, useEffect, useState } from 'react'
import { StatusContext } from '../../../app/StatusContextProvider'
import s from '../styles/mainStyles.module.scss'

export const AcceptionBar = () => {

  const [isChecked, setIsChecked] = useState(false)

  const statusContext = useContext(StatusContext)
  const [isChangedStatus, toggleChangedStatus] = [statusContext.isChangedStatus, statusContext.toggleChangedStatus]
  const handleChange = () => (
    setIsChecked(!isChecked)
  )
  
  useEffect(() => {
    toggleChangedStatus(true)
  }, [isChecked])

  // empty dependencies effect not to change status in 1st render
  useEffect(() => {
    toggleChangedStatus(false)
  }, [])
  
  return (
    <>
      <div className={s.checkBoxWrap}>
        <p>Я согласен</p>
        <div className={s.checkBoxBar}>
          <input
            style={{cursor: 'pointer'}}
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