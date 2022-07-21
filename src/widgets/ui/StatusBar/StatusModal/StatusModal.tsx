import { useContext, useEffect, useRef, useState } from "react"
import { StatusContext } from "../../../../app/StatusContextProvider"
import s from '../styles/statusBar.module.scss'

interface modalProps {
  isActivated: boolean,
  setIsActivated: (value: boolean) => void
  status: string,
  setStatus: (value: string) => void
}

export const StatusModal = ({isActivated, setIsActivated, status, setStatus}: modalProps) => {

  const statusContext = useContext(StatusContext)
  const [isChangedStatus, toggleChangedStatus] = [statusContext.isChangedStatus, statusContext.toggleChangedStatus]

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

  const changeStatus = (isConfirmedChanging: boolean) => {
    if(isConfirmedChanging){
      setStatus(newStatus)
      toggleChangedStatus(true)
    } else {
      setNewStatus(status)
    }
    setIsActivated(false)
  }

  // Move cursor to end of textarea
  inputEl.current?.setSelectionRange(-1, -1)

  return (
    <div onClick={() => setIsActivated(false)} className={`${s.statusModalWrap} ${isActivated && s.activeModal}`}>
      <div onClick={(e) => e.stopPropagation()} className={`${s.statusModal} ${isActivated && s.activeModal}`}>
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
    </div>
  )
}