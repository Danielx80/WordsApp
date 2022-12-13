import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MouseEvent } from 'react'
import LogoNav from '../../components/Images/LogoNav/index';

export default {
	title: 'Images',
	component: LogoNav
} as ComponentMeta<typeof LogoNav>

const handleClick = (e: MouseEvent<HTMLDivElement>) => {
	console.log(e);

}

const Template: ComponentStory<typeof LogoNav> = (args) => {

	return <LogoNav />
}

export const LogoNavComponent = Template.bind({})
