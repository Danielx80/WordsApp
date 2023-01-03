import { useState } from 'react';
import { InputsModalsProps } from './interface/index';
import styles from './Inputs.module.css'

export const InputModal = ({ hasError, errorMsg, onBlur, textId, textTitle, size, type, placeholder, onChange, required, name, value, defaultValue, disabled }: InputsModalsProps) => {

	const [focus, setFocus] = useState(false)


	return (
		<div>
			<label id={textId} className={`${styles.textTitle}`} style={{ color: hasError ? 'red' : 'var(--neutral800)' }} >{textTitle}</label>
			<div className={`${styles[size]} ${hasError && styles.emailError} ${focus && styles.focusStyle} ${styles.borders}`} >
				<input
					className={`${styles.contenido} ${hasError ? styles.errorCont : styles.contenido }`}
					onFocus={() => setFocus(true)}
					onBlur={() => { onBlur; setFocus(false) }}
					id={textId}
					required={required}
					type={type}
					disabled={disabled}
					defaultValue={defaultValue}
					value={value}
					name={name}
					onChange={onChange}
					placeholder={placeholder}
				/>
			</div>
			<span>{errorMsg}</span>
		</div>
	)
}

export default InputModal
InputModal.defaultProps = {
	type: 'text',
	placeholder: 'User@email.com',
	size: 'lg',
	textTitle: 'Email*'
}