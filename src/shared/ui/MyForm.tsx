import s from './myForm.module.scss'

interface FormProps {
  value: string,
  inputType: string,
  props: {}
}

export const MyForm = ({ value, inputType, props }: FormProps) => {
  return (
    <div className={s.wrapper} >
      <input type={inputType} {...props} className={s.input} />
    </div>
  )
}