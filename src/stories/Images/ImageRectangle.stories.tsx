import { ComponentMeta, ComponentStory } from '@storybook/react'
import { MouseEvent } from 'react'
import ImageRectangle from '../../components/Images/RectangleImg';

export default {
	title: 'Images',
	component: ImageRectangle
} as ComponentMeta<typeof ImageRectangle>

const handleClick = (e: MouseEvent<HTMLDivElement>) => {
	console.log(e);

}

const Template: ComponentStory<typeof ImageRectangle> = (args) => {

	return <ImageRectangle />
}

export const ImageRectangleComponent = Template.bind({})
