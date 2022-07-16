import { useEffect, useRef, useState } from 'react'
import s from './styles/statusBar.module.scss'
import { StatusHeader } from './StatusHeader/StatusHeader'
import { StatusModal } from './StatusModal/StatusModal'

export const StatusBar = () => {
  
  const [isActivated, setIsActivated] = useState(false)

  const [status, setStatus] = useState('Прежде чем действовать, надо понять') // default status value

  return (
    <div className={s.statusBar}>
      <StatusHeader />
      <div className={s.statusWrap}>
        <button onClick={() => setIsActivated(true)} className={s.btn}>Сменить статус</button>
        <div className={s.status}>{status}</div>
        <StatusModal isActivated={isActivated} status={status} setStatus={setStatus}/>
      </div>
    </div>
  )
}