import styles from './InputSelectIidiom.module.css'
import { ChangeEventHandler, useState } from 'react';

export interface InputsSelectIdiomProps {
	textTitle: string,
	size: 'sm' | 'xl',
	defaultValue?: string,
	onChange?: any,
	name?: string,
	value?: string,
	mensajeProps?: React.ReactElement | React.ReactElement[] | string
	eventHandler?: React.ChangeEventHandler<HTMLSelectElement>
	onBlur?: React.FocusEventHandler<HTMLSelectElement> | undefined,
	errorMsg?: string,
	hasError?: boolean,
}
export const InputSelectIdiom = ({ hasError, errorMsg, onBlur, textTitle, size, defaultValue, onChange, name, value }: InputsSelectIdiomProps) => {
	const [focus, setFocus] = useState()

	return (
		<div>
			<label
				style={{ color: hasError ? 'red' : 'var(--neutral800)' }}
				className={`${styles.textTitle}`}
				htmlFor="idiom"
			>
				{textTitle}
			</label>
			<select
				onBlur={onBlur}
				className={`${styles[size]} 
				${hasError && styles.emailError} 
				${hasError ? styles.errorCont : styles.contenido}
			 ${styles.borders} 
			 ${styles.contenido}`}
				id='idiom'
				value={value}
				name={name}
				defaultValue={defaultValue}
				onChange={onChange}
			>
				<option className={`${styles.contenido}`} value='others'>Choose...</option>
				<option className={`${styles.contenido}`} value='Spanish'>Spanish</option>
				<option className={`${styles.contenido}`} value='English'>English</option>
			</select>
			<span>{errorMsg}</span>
		</div>
	)
}
