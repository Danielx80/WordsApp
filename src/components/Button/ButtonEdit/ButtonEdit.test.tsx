import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, test, vitest } from 'vitest';
import user from '@testing-library/user-event'
import ButtonIcon from './ButtonEdit';

describe('Prueba del componente <ButtonIcon />', () => {
	afterEach(cleanup)

	test('Renderizar el componente ButtonEdit', () => {
		render(<ButtonIcon />)
	})

	test('Renderizar el ButtonEdit', () => {
		render(<ButtonIcon />)
		const BtnEdit = screen.getByRole('button')
		expect(BtnEdit).toBeInTheDocument()
	})

	test('Funciona correctamente el método onClick', async () => {
        const onClick = vitest.fn()
    
        render(<ButtonIcon onClick={onClick} />)
        const button = screen.getByRole('button')
        await user.click(button)
    
        expect(onClick).toBeCalled()
      })

})