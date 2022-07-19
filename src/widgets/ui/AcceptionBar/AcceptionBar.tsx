import s from '../styles/mainStyles.module.scss'

export const AcceptionBar = () => {
  return (
    <>
      <div className={s.checkBoxWrap}>
        <p>Я согласен</p>
        <div className={s.checkBoxBar}>
          <input type="checkbox" className={s.checkboxInput}/>
          <p>принимать актуальную информацию на емейл</p>
        </div>
      </div>
    </>
  )
} 