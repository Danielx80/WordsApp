import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputSelectTime } from '../../components/InputsModal/inputSelect/InputSelect';




export default {
	title: 'Input',
	component: InputSelectTime,
} as ComponentMeta<typeof InputSelectTime>

const handleClick = () => {

}

const Template: ComponentStory<typeof InputSelectTime> = (args) => {
	return <InputSelectTime {...args} />
}

export const InputSelectComponent = Template.bind({})
InputSelectComponent.args = {
	size: 'sm',
	textTitle: 'Timezone*',
	eventHandler: handleClick,
}