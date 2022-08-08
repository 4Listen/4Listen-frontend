import { FC, InputHTMLAttributes } from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

export const CustomDefaultInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return (
    <FormControl>
      <Input variant="outline" placeholder={props.placeholder} value={props.value} />
    </FormControl>
  )
}

export const CustomDefaultInputWithTitle: FC<InputHTMLAttributes<HTMLInputElement>> = ({
  ...props
}) => {
  return (
    <FormControl>
      <FormLabel>{props.title}</FormLabel>
      <Input variant="outline" placeholder={props.placeholder} value={props.value} />
    </FormControl>
  )
}
