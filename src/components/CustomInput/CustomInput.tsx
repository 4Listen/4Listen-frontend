import { FC, InputHTMLAttributes } from 'react'
import { Input, InputGroup, InputLeftAddon } from '@chakra-ui/react'

export const CustomDefaultInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return (
    <InputGroup>
      <Input variant="outline" placeholder={props.placeholder} value={props.value} />
    </InputGroup>
  )
}
