import {ComponentMeta, ComponentStory} from '@storybook/react'
import Body2 from '../../components/Typhography/Body2';


export default {
    title:'Typography',
    component: Body2
} as ComponentMeta<typeof Body2>

const Template:ComponentStory<typeof Body2> = (args) => {

    return<Body2 {...args}>Green House</Body2>
}

export const Body2Component = Template.bind({})