import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, vitest } from 'vitest';
import user from '@testing-library/user-event'
import Avatar from './Avatar';

describe('Pruebas en el componente <Avatar />', () => {
	afterEach(cleanup)

	test('Renderizar el componente Avatar', () => {
		render(<Avatar />)
	})
	test('Renderizar el Avatar en el documento ', () => {
		render(<Avatar />)
		const avatar = screen.getByRole('avatar')
		expect(avatar).toBeInTheDocument()
	})
	test('Funciona correctamente el método onClick', async () => {
        const onClick = vitest.fn()
    
        render(<Avatar onClick={onClick} />)
        const button = screen.getByRole('clickAvatar')
        await user.click(button)
    
        expect(onClick).toBeCalled()
      })
	  test('', () => {
		
	  })
})