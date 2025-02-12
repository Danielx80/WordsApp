export interface InputSearchsProps {
	size: 'sm' | 'md' | 'lg',
	type: 'button' | 'checkbox' | 'text',
	icon?: string,
	text?: string,
	value?: string,
	background?: string,
	eventHandler?: React.ChangeEventHandler<HTMLInputElement>,
	onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
}