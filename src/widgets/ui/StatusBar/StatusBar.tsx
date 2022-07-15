import { StatusHeader } from '../StatusHeader/StatusHeader'
import s from '../styles/statusBar.module.scss'

type StatusProps = {
  status: string
}

export const StatusBar = ({status }: StatusProps) => {
  return (
    <div className={s.statusBar}>
      <StatusHeader />
      <div className={s.statusWrap}>
        <button className={s.btn}>Сменить статус</button>
        <div className={s.status}>{status}</div>
      </div>
    </div>
  )
}