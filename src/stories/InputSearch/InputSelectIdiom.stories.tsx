import { ComponentMeta, ComponentStory } from '@storybook/react';
import { InputSelectIdiom } from '../../components/InputsModal/InputSelectIdioms/InputSelectIdiom';




export default {
	title: 'Input',
	component: InputSelectIdiom,
} as ComponentMeta<typeof InputSelectIdiom>

const handleClick = () => {

}

const Template: ComponentStory<typeof InputSelectIdiom> = (args) => {
	return <InputSelectIdiom {...args} />
}

export const InputSelectIdiomComponent = Template.bind({})
InputSelectIdiomComponent.args = {
	size: 'sm',
	textTitle: 'Language*',
	eventHandler: handleClick,
}