import { useRef, useState } from 'react'
import { StatusHeader } from '../StatusHeader/StatusHeader'
import s from '../styles/statusBar.module.scss'

type StatusProps = {
  status: string
}

export const StatusBar = ({status }: StatusProps) => {

  const [isDisabled, setIsDisabled] = useState(true)
  const inputEl = useRef<HTMLInputElement>(null)

  const handleStatus = () => {
    setIsDisabled(false)
    inputEl.current?.focus()
  }

  return (
    <div className={s.statusBar}>
      <StatusHeader />
      <div className={s.statusWrap}>
        <button onClick={handleStatus} className={s.btn}>Сменить статус</button>
        <input ref={inputEl} disabled={isDisabled} className={s.status} value={status} />
      </div>
    </div>
  )
}