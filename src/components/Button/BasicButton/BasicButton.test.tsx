import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, test, expect, vitest } from 'vitest';
import user from '@testing-library/user-event'
import BasicBtn from './BasicButton';

describe('Prueba del componente <BasicBtn />', () => {
	afterEach(cleanup)

	test('Renderizar componente BasicButton', () => {
		render(<BasicBtn />)
	})

	test('Renderizar el boton BasicButton', () => {
		render(<BasicBtn />)
		const BasicButton = screen.getByRole('button')
		expect(BasicButton).toBeInTheDocument()
	})
	test('Funciona correctamente el método onClick', async () => {
        const onClick = vitest.fn()
    
        render(<BasicBtn onClick={onClick} />)
        const button = screen.getByRole('button')
        await user.click(button)
    
        expect(onClick).toBeCalled()
      })
})
