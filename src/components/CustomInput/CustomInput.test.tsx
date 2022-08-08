import { render, screen } from '@testing-library/react'
import { CustomDefaultInput, CustomDefaultInputWithTitle } from './CustomInput'
import { defaultProps } from './CustomInput.data'

describe('<CustomInput /> Unit', () => {
  it('Should render default input correctly', () => {
    render(<CustomDefaultInput {...defaultProps} />)
    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeTruthy()
    expect(screen.getByDisplayValue(defaultProps.value)).toBeTruthy()
  })

  it('Should render default input with title correctly', () => {
    render(<CustomDefaultInputWithTitle {...defaultProps} />)
    expect(screen.getByText(defaultProps.title)).toBeTruthy()
    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeTruthy()
    expect(screen.getByDisplayValue(defaultProps.value)).toBeTruthy()
  })
})
