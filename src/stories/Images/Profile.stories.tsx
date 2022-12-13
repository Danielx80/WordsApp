import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MouseEvent } from 'react'
import ProfileHome from '../../components/Images/ProfileHome/index';


export default {
	title: 'Images',
	component: ProfileHome
} as ComponentMeta<typeof ProfileHome>

const handleClick = (e: MouseEvent<HTMLDivElement>) => {
	console.log(e);

}

const Template: ComponentStory<typeof ProfileHome> = (args) => {

	return <ProfileHome />
}

export const ProfileHomeComponent = Template.bind({})
