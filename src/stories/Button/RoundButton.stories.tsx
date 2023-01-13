import { ComponentMeta, ComponentStory } from '@storybook/react'
import { RoundBtn } from '../../components/Button/RoundButton/RoundButton';

export default {
	title: 'Button',
	component: RoundBtn
} as ComponentMeta<typeof RoundBtn>

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