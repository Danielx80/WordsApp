import { ComponentMeta, ComponentStory } from '@storybook/react'
import ToggleButton from '../../components/Button/ToggleButton/ToggleButton';

export default {
    title: 'Button',
    component: ToggleButton
} as ComponentMeta<typeof ToggleButton>

const Template: ComponentStory<typeof ToggleButton> = (args) => {

    return <ToggleButton {...args} />
}

export const toggleButtonComponent = Template.bind({})
toggleButtonComponent.args = {
    values: [
        'Admin', 'Editor'
    ],
    onChange: (selected) => console.log(selected)
}