import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputCategories } from '../../components/InputCategories/InputCategories';

export default {
	title: 'Input',
	component: InputCategories,
	decorators: [
		(Story) => (<div style={{
			flexDirection: 'row',
			display: 'flex',
			gap: '0.8rem',
			padding: '1rem',
			backgroundColor: 'white',
			borderRadius: '0.4rem'
		}}>
			{Story()}
		</div>)

	]
} as ComponentMeta<typeof InputCategories>

const Template: ComponentStory<typeof InputCategories> = (args) => {
	return <InputCategories {...args} />
}

export const InputCategoriesComponent = Template.bind({})
InputCategoriesComponent.args = {
	defaultValue: '',
	eventHandler: () => { },
	name: '',
	value: '',
	onChange: () => { }
}