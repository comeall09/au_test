import { useEffect, useState } from 'react'
import s from '../styles/statusBar.module.scss'

export const StatusHeader = () => {
	const [personNum, setPersonNum] = useState(Number)
	useEffect(() => {
		// random num in the range of 1000000-9999999
		const num = Math.floor(Math.random() * (9999999 - 1000000)) + 1000000
		setPersonNum(num)
	}, [])

	return (
		<header className={s.statusHeader}>
        <h1><span>Здравствуйте, </span>Человек №{personNum}</h1>
    </header>
	)
}