import { useEffect, useRef, useState } from "react"
import s from '../styles/statusBar.module.scss'

interface modalProps {
  isActivated: boolean,
  status: string,
  setStatus: (value: string) => void
}

export const StatusModal = ({isActivated, status, setStatus}: modalProps) => {

  const inputEl = useRef<HTMLInputElement>(null)
  // useEffect(() => {
  //   inputEl.current?.focus()
  // }, [isActive])
  const statusHandler = (value: string) => {
    setStatus(value)
  }
  
  return (
    <div className={s.statusModalWrap}>
      <div className={s.statusModal}>
        <input
          className={s.statusInput}
          value={status}
          ref={inputEl}
          onChange={e => statusHandler(e.target.value)}
          maxLength={100}
        />
        <button className={`${s.btn} ${s.saveStatusBtn} `}>Сохранить статус</button>
      </div>
    </div>
  )
}