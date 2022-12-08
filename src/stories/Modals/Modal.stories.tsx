import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from '../../components/Modal/index';
import ModalEditUser from '../../components/Modal/ModalEditUser/ModalEditUser';
import ModalDelete from '../../components/Modal/ModalDelete/ModalDelete';

export default {
	title: 'modal',
	component: Modal,
	decorators: [
		(Story) => (
			<div style={{ padding: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
				{Story()}
			</div>
		)
	]
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => {
	return <Modal {...args} />
}

export const ModalComponent = Template.bind({})
ModalComponent.args = {
	children: <ModalEditUser
		backgroundColor='white'
	/>,
	isOpen: true,
}