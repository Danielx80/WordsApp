import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MouseEvent } from 'react'
import { RoundBtn } from '../../components/Button/RoundButton/RoundButton';

export default {
	title: 'Button',
	component: RoundBtn
} as ComponentMeta<typeof RoundBtn>

const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
	console.log(e);

}

const Template: ComponentStory<typeof RoundBtn> = (args) => {

	return <RoundBtn {...args} />
}

export const RoundBtnComponent = Template.bind({})
RoundBtnComponent.args = {
	iconName: 'ListBullets',
	weight: 'duotone',
	height: 4,
	width: 3,
	padding: 1
}