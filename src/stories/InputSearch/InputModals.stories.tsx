import { ComponentMeta, ComponentStory } from '@storybook/react';
import InputModal from '../../components/InputsModal/Inputs'



export default {
	title: 'Input',
	component: InputModal,
} as ComponentMeta<typeof InputModal>

const handleClick = () => {

}

const Template: ComponentStory<typeof InputModal> = (args) => {
	return <InputModal {...args} />
}

export const InputModalComponent = Template.bind({})
InputModalComponent.args = {
	size: 'lg',
	type: 'text',
	placeholder: 'user@user.com',
	textTitle: 'Email*',
	eventHandler: handleClick,
}