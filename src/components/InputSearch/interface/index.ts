
export interface InputSearchsProps {
	size: 'sm' | 'md' | 'lg',
	type: 'button' | 'checkbox'|'text',
	icon?: string,
	text?: string,
	onChange?: any,
	eventHandler?: React.ChangeEventHandler<HTMLInputElement>
}