import { InputSearch } from '../../components/InputSearch/InputSearch';
import { ComponentMeta, ComponentStory } from '@storybook/react';


export default {
	title: 'Input',
	component: InputSearch,
} as ComponentMeta<typeof InputSearch>

const handleClick = () => {

}

const Template: ComponentStory<typeof InputSearch> = (args) => {
	return <InputSearch {...args} />
}

export const InputSearchComponent = Template.bind({})
InputSearchComponent.args = {
	size: 'lg',
	type: 'text',
	text: 'Search Users by name or keyword...',
	icon: 'MagnifyingGlass',
	eventHandler: handleClick,
}