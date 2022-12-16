import { cleanup, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, test, vitest } from 'vitest';
import user from '@testing-library/user-event'
import CircleIcon from './CircleIconButton';



describe('Prueba en el componente <CircleIconButton />', () => {
	afterEach(cleanup)

	test('Renderizar el componente de CircleIconButton', () => {
		render(<CircleIcon iconName={'Phone'}/>)
	})

	test('Renderizar el boton de CircleIconButton', () => {
		render(<CircleIcon iconName={'Phone'}/>)
		const CircleBtn = screen.getByRole('button')
		expect( CircleBtn ).toBeInTheDocument()
	})

	test('Funciona correctamente el método onClick del botón', async () => {
        const onClick = vitest.fn()
    
        render(<CircleIcon onClick={onClick} iconName={'Phone'}/>)
        const buttonIcon = screen.getByRole('button')
        await user.click(buttonIcon)
    
        expect(onClick).toBeCalled()
      })
})