
export interface InputsModalsProps {
	textTitle: string,
	size: 'sm' | 'md' | 'lg' | 'xl',
	type: 'text' | 'number' | 'time' | 'date'
	placeholder?: string,
	text?: string,
	defaultValue?: string,
	onChange?: any,
	disabled?: boolean,
	name?: string,
	value?: string,
	eventHandler?: React.ChangeEventHandler<HTMLInputElement>
}