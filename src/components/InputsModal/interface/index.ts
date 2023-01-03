
export interface InputsModalsProps {
	textTitle: string,
	size: 'sm' | 'md' | 'lg' | 'xl',
	type: 'text' | 'number' | 'time' | 'date' | 'month'
	onChange?: any,
	placeholder?: string,
	defaultValue?: string,
	name?: string,
	value?: string,
	required?: boolean | undefined
	disabled?: boolean,
	textId?: string
	onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
	errorMsg?: string,
	hasError?: boolean,
}