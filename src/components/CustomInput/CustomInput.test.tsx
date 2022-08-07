import { render, screen } from '@testing-library/react'
import { CustomDefaultInput } from './CustomInput'
import { defaultProps } from './CustomInput.data'

describe('<CustomInput /> Unit', () => {
  it('Should render default input correctly', () => {
    render(<CustomDefaultInput {...defaultProps} />)
    expect(screen.getByPlaceholderText(defaultProps.placeholder)).toBeTruthy()
    expect(screen.getByDisplayValue(defaultProps.value)).toBeTruthy()
  })
})
