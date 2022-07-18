import s from './myBlock.module.scss'
import * as React from 'react'

type Props = {
	children?: React.ReactNode
}

export const MyBlock: React.FC<Props> = ({ children }) => {
	return (
		<>
			<div className={s.wrap}>
				{children}
			</div>
		</>
	)
}