import styles from "./CountWords.module.css"
import { MouseEventHandler } from 'react';


interface CounterWordsProps {
	onClick?: MouseEventHandler,
	number?: number,
}

const CounterWords = ({ number, onClick }: CounterWordsProps) => {
	return (
		<button className={styles.button} onClick={onClick}>
			<div className={styles.containerButton}>
				<p>{number}</p>
				<p className={styles.textButton}>Words</p>
			</div>
		</button>
	)
}

export default CounterWords