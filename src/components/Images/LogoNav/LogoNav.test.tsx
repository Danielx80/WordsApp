import { cleanup, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import LogoNav from './index';

describe('Prueba del componente < LogoNav />', () => {
	afterEach(cleanup)

	test('renderizar el componente del LogoNav', () => {
		render(<LogoNav />)
	})

	test('renderizar la imagen del LogoNav', () => {
		render(<LogoNav />)
		const Image = screen.getByRole('img')
		expect(Image).toBeInTheDocument()
	})
})