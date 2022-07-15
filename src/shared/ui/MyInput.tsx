import s from './myInput.module.scss'

interface FormProps {
  value: string,
  inputType: string,
  props: {}
}

export const MyInput = ({ value, inputType, props }: FormProps) => {
  return (
    <div className={s.wrapper} >
      <input type={inputType} {...props} className={s.input} />
    </div>
  )
}