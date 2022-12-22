import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from '../../components/Modal/index';
import ModalEditUser from '../../components/Modal/ModalEditUser/ModalEditUser';
import { useState } from 'react';
import { IUser } from '../../interface/FetchAllUserResponse';

const initialValue = {
	date_of_birth: '',
	email: '',
	first_name: '',
	id: '',
	id_auth0: '',
	language: '',
	last_name: '',
	second_last_name: '',
	second_name: '',
	telephone: '',
	time_zone: ''
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