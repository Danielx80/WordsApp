import { InputsModalsProps } from './interface/index';
import styles from './Inputs.module.css'

export const InputModal = ({ textTitle, size, type, placeholder, onChange, text, name, value, defaultValue, disabled }: InputsModalsProps) => {
	return (
		<div>
			<p className={`${styles.textTitle}`}>{textTitle}</p>
			<div className={`${styles[size]} ${styles.borders}`}>
				<input className={`${styles.contenido}`} type={type} disabled={disabled} defaultValue={defaultValue} value={value} name={name} onChange={onChange} placeholder={placeholder} />
			</div>
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