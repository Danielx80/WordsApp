import React from 'react'
import styles from './InputSelect.module.css'
import ReactElement from 'react';


export interface InputsSelectTimeProps {
	textTitle: string,
	size: 'sm' | 'xl',
	defaultValue?: string,
	onChange?: any,
	name?: string,
	value?: string,
	mensajeProps?: React.ReactElement | React.ReactElement[] | string
	eventHandler?: React.ChangeEventHandler<HTMLSelectElement>
}
export const InputSelectTime = ({ textTitle, size, defaultValue, onChange, name, value, mensajeProps }: InputsSelectTimeProps) => {

	const mensaje = 'GTM+ 05:00) Ekaterinburg/ Ottawa, Canada'
	const resp = mensaje.split('/')
	console.log(resp[0])
	return (
		<div>
			<p className={`${styles.textTitle}`}>{textTitle}</p>
			<label htmlFor="timezone"></label>
			<select className={`${styles[size]} ${styles.borders} ${styles.contenidoOne}`} id='timezone' value={value} name={name} defaultValue={defaultValue} onChange={onChange}>
				<option className={`${styles.contenido}`} value='others'>Choose...</option>
				<option className={`${styles.contenido}`} value={resp}>(GTM+ 05:00) Ekaterinburg</option>
				<option className={`${styles.contenido}`} value='(GTM- 03:00) Greenland'>(GTM- 03:00) Greenland</option>
				<option className={`${styles.contenido}`} value='(GTM- 01:00) Cape Verde Islands'>(GTM- 01:00) Cape Verde Islands</option>
				<option className={`${styles.contenido}`} value='(UTC- 03:00) Montevideo'>(UTC- 03:00) Montevideo</option>
				<option className={`${styles.contenido}`} value='(GMT -05:00) Mexico'>(GMT -05:00) Mexico</option>
			</select>
		</div>
	)
}
