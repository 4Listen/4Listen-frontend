import { render, screen } from '@testing-library/react'
import {
  CustomCEPInput,
  CustomCPFInput,
  CustomCurrencyInput,
  CustomDefaultInput,
} from './CustomInput'
import { defaultProps } from './CustomInput.data'

describe('<CustomInput /> Unit', () => {
  it('Should render default input with title correctly', () => {
    render(<CustomDefaultInput {...defaultProps} />)

    expect(screen.getByText(defaultProps.title)).toBeTruthy()
    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeTruthy()
  })

  it('Should render cpf input with correctly', () => {
    render(<CustomCEPInput {...defaultProps} />)

    expect(screen.getByText(defaultProps.title)).toBeTruthy()
  })

  it('Should render cpf input with correctly', () => {
    render(<CustomCPFInput {...defaultProps} />)

    expect(screen.getByText(defaultProps.title)).toBeTruthy()
  })

  it('Should render cpf input with correctly', () => {
    render(<CustomCurrencyInput {...defaultProps} />)

    expect(screen.getByText(defaultProps.title)).toBeTruthy()
  })
})
