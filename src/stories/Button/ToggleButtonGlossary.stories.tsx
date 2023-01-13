import { ComponentMeta, ComponentStory } from '@storybook/react'
import ToggleButtonGlossary from '../../components/Button/ToggleButtonGlossary/ToggleButtonGlossary';
import ToggleButtonGlossaryExample from '../../components/Button/ToggleButtonGlossary/ToggleButtonGlossary copy';

export default {
    title: 'Button',
    component: ToggleButtonGlossaryExample
} as ComponentMeta<typeof ToggleButtonGlossaryExample>

const Template: ComponentStory<typeof ToggleButtonGlossaryExample> = (args) => {

    return <ToggleButtonGlossaryExample {...args} />
}

export const ToggleButtonGlossaryExampleComponent = Template.bind({})
ToggleButtonGlossaryExampleComponent.args = {
    values: ['Words', 'Categories'],
   

}