import { useMutation, useQuery, useQueryClient } from 'react-query';
import { createUsers, getUsers, updateUsers, deleteUsers } from '../api/MicroServiceOne';

export function getUsersData() {
	return useQuery('users', getUsers, {
	})
}

// Metodo para crear usuarios 
export function createUserData() {
	const queryClient = useQueryClient()
	return useMutation(createUsers, {
		onSuccess: async () => {
			await queryClient.invalidateQueries('users')
		},
	})
}

// Metodo para acualizar un usuario
export function updateUserData() {
	const queryClient = useQueryClient()
	return useMutation(updateUsers, {
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['users']
			})
		}
	})
}

// Metodo para eliminar usuario
export function deleteUserData() {
	const queryClient = useQueryClient()
	return useMutation(deleteUsers, {
		onSuccess: async () => {
			await queryClient.invalidateQueries({
				queryKey: ['users']
			})
		}
	})
}