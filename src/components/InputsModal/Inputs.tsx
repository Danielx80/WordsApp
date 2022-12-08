import { InputsModalsProps } from './interface/index';
import styles from './Inputs.module.css'

export const InputModal = ({textTitle, size, type, eventHandler, onChange, text }: InputsModalsProps) => {
	return (
		<div>
			<p className={`${styles.textTitle}`}>{textTitle}</p>
			<div className={`${styles[size]} ${styles.borders}`}>
				<input className={`${styles.contenido}`} type={type} onChange={eventHandler} placeholder={text} />
			</div>
		</div>

	)
}

export default InputModal
InputModal.defaultProps = {
	type: 'text',
	text: 'User@email.com',
	size: 'lg',
	textTitle: 'Email*'
}