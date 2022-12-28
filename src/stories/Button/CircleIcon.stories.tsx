import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MouseEvent } from 'react'
import { CircleIcon } from '../../components/Button/CircleIconButton/CircleIconButton';

export default {
	title: 'Button',
	component: CircleIcon
} as ComponentMeta<typeof CircleIcon>

const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
	console.log(e);

}

const Template: ComponentStory<typeof CircleIcon> = (args) => {

	return <CircleIcon {...args} />
}

export const CircleIconComponent = Template.bind({})
CircleIconComponent.args = {
	iconName: 'Phone',
}