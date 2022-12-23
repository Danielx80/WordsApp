import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from '../../components/Modal/index';
import ModalEditUser from '../../components/Modal/ModalEditUser/ModalEditUser';

const initialValue = {
	date_of_birth: '12/13/2020',
	email: 'Danielmondragon@gmail.com',
	first_name: 'daniel',
	id: '84965516518',
	id_auth0: 'auth0|4615615684845456',
	language: 'Spanish',
	last_name: 'Mondragon',
	second_last_name: 'Garcia',
	second_name: 'Ricardo',
	telephone: '427244345',
	time_zone: '(GTM+ 05:00)Ekaterinburg'
}

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
	children:
		<ModalEditUser
			size='md'
			textHeader='Edit User'
			user={initialValue}
		/>,
	isOpen: true,
}