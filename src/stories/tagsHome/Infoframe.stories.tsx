import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MouseEvent } from 'react'
import TagsUser from '../../components/Infoframe';


export default {
    title: 'Tags',
    component: TagsUser
} as ComponentMeta<typeof TagsUser>

const handleClick = (e: MouseEvent<HTMLDivElement>) => {
    console.log(e);

}


const Template: ComponentStory<typeof TagsUser> = (args) => {

    return <TagsUser {...args} />
}

export const TagsUserComponent = Template.bind({})
TagsUserComponent.args = {
    icon: 'Phone',
    size: 'md',
    onClick: handleClick,
    backgroundColor: 'var(--gray500)',
    text: 'isabella@bluepixel.mx'

}