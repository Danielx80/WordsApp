import { cleanup, render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import { afterEach, describe, expect, test, vitest } from 'vitest';
import { MX } from '../../Iconography/Flags';
import LanguageButton from './index';

describe('Prueba en el componente <LanguageButton />', ()=>{
	afterEach(cleanup)

	test('Renderizar el boton de LanguageButton', () => {
		render(<LanguageButton flag={<MX /> }/>)
	})
	test('Renderizar que el componente exista en el documento', () => {
		render(<LanguageButton flag={<MX /> }/>)
		const IconFlag = screen.getByRole('button')
		expect( IconFlag).toBeInTheDocument()
	})
	test('Funcionamiento correcto del metodo onClick del boton', async() => {
		const onClick = vitest.fn()

		render(<LanguageButton flag={<MX />} onClick={onClick} />)
		const BtnFlag = screen.getByRole('button')
		await user.click(BtnFlag)

		expect(onClick).toBeCalled()
	})
})