import React from 'react'
import styles from './InputSelect.module.css'
import { useState } from 'react';
import { Styles } from '../../../interface/index';

export interface InputsSelectTimeProps {
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
export const InputSelectTime = ({ hasError, errorMsg, onBlur, textTitle, size, defaultValue, onChange, name, value }: InputsSelectTimeProps) => {

	const [focus, setFocus] = useState()

	return (
		<div>
			<label
				style={{ color: hasError ? 'red' : 'var(--neutral800)' }}
				className={`${styles.textTitle}`}
				htmlFor="timezone">
				{textTitle}

			</label>
			<select
				onBlur={onBlur}
				className={`${styles[size]} 
				${hasError && styles.emailError} 
				${hasError ? styles.errorCont : styles.contenido}
			 ${styles.borders} 
			 ${styles.contenido}`}
				id='timezone'
				value={value}
				name={name}
				defaultValue={defaultValue}
				onChange={onChange}
			>
				<option value='others'>Choose...</option>
				<option className={`${styles.contenido}`} value='(GTM+05:00) Ekaterinburg / Chicago, United States'>(GTM+05:00) Ekaterinburg / Chicago, United States</option>
				<option className={`${styles.contenido}`} value='(GTM-03:00) Greenland / México, CDMX'>(GTM-03:00) Greenland / México, CDMX</option>
				<option className={`${styles.contenido}`} value='(GTM-01:00) Cape Verde Islands / Ottawa, Canada'>(GTM-01:00) Cape Verde Islands / Ottawa, Canada</option>
				<option className={`${styles.contenido}`} value='(UTC-03:00) Montevideo / México, CDMX'>(UTC-03:00) Montevideo / México, CDMX</option>
				<option className={`${styles.contenido}`} value='(GMT-05:00) Mexico / México, CDMX'>(GMT-05:00) Mexico / México, CDMX</option>
			</select>
			<span>
				{errorMsg}
			</span>
		</div>
	)
}