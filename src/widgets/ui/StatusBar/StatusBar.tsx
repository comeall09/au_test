import { useEffect, useRef, useState } from 'react'
import s from './styles/statusBar.module.scss'
import { StatusHeader } from './StatusHeader/StatusHeader'

export const StatusBar = () => {
  const [isActive, setIsActive] = useState(true)
  
  const activateStatus = () => {    
    setIsActive(false)
  }

  const [status, setStatus] = useState('')
  const statusHandler = (value: string) => {
    setStatus(value)
  }

  const inputEl = useRef<HTMLInputElement>(null)
  useEffect(() => {
    inputEl.current?.focus()
  }, [isActive])

  return (
    <div className={s.statusBar}>
      <StatusHeader />
      <div className={s.statusWrap}>
        <button onClick={activateStatus} className={s.btn}>Сменить статус</button>
        <input
          className={s.status}
          value={status}
          disabled={isActive}
          ref={inputEl}
          onChange={e => statusHandler(e.target.value)}
        />
      </div>
    </div>
  )
}