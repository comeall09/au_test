import { useEffect, useRef, useState } from "react"
import s from '../styles/statusBar.module.scss'

interface modalProps {
  isActivated: boolean,
  setIsActivated: (value: boolean) => void
  status: string,
  setStatus: (value: string) => void
}

export const StatusModal = ({isActivated, setIsActivated, status, setStatus}: modalProps) => {

  // focus input when modal is opened
  const inputEl = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    inputEl.current?.focus()
  }, [isActivated])
  
  const [isMaxLengthed, setIsMaxLengthed] = useState(false)

  const [newStatus, setNewStatus] = useState(status)
  const statusHandler = (value: string) => {
    setNewStatus(value)
    if(value.length > 99) {
      setIsMaxLengthed(true)
    } else {
      setIsMaxLengthed(false)
    }
  }

  const changeStatus = (isChange: boolean) => {
    if(isChange){
      setStatus(newStatus)
    } else {
      setNewStatus(status)
    }
    setIsActivated(false)
  }

  return (
    <>
      <div className={`${s.statusModal} ${isActivated && s.activeModal}`}>
        <textarea
          className={s.statusInput}
          value={newStatus}
          ref={inputEl}
          onChange={e => statusHandler(e.target.value)}
          maxLength={100}
        />
        <div className={s.modalBtns}>
          <div className={`${s.statusMaxLength} ${isMaxLengthed && s.maxLengthed}`}>Не более 100 символов</div>
          <div>
            <button onClick={() => changeStatus(true)} className={s.confirmBtn}>Сохранить статус</button>
            <button onClick={() => changeStatus(false)} className={s.cancelBtn}>Отменить</button>
          </div>
        </div>
      </div>
    </>
  )
}