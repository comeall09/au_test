import s from '../styles/statusBar.module.scss'

export const StatusHeader = () => {

	// random num in the range of 1000000-9999999
	const personNum = Math.floor(Math.random() * (9999999 - 1000000)) + 1000000

	return (
		<header className={s.statusHeader}>
        <h1><span>Здравствуйте, </span>Человек №{personNum}</h1>
    </header>
	)
}