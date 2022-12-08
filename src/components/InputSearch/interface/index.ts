
export interface InputSearchsProps {
	size: 'sm' | 'md' | 'lg',
	type: 'text',
	icon?: string,
	text?: string,
	onChange?: any,
	eventHandler?: React.ChangeEventHandler<HTMLInputElement>
}