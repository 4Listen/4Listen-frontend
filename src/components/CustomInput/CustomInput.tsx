import { FC, InputHTMLAttributes, useCallback } from 'react'
import { FormControl, FormLabel, Input } from '@chakra-ui/react'
import { cep, cpf, currency } from '../../utils/masks/masks'

export const CustomDefaultInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return (
    <FormControl>
      <FormLabel>{props.title}</FormLabel>
      <Input variant="outline" placeholder={props.placeholder} />
    </FormControl>
  )
}

export const CustomCPFInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    cpf(e)
  }, [])

  return (
    <FormControl>
      <FormLabel>{props.title}</FormLabel>
      <Input variant="outline" placeholder="999.999.999-99" onKeyUp={handleKeyUp} />
    </FormControl>
  )
}

export const CustomCEPInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    cep(e)
  }, [])

  return (
    <FormControl>
      <FormLabel>{props.title}</FormLabel>
      <Input variant="outline" placeholder="99.999.999" onKeyUp={handleKeyUp} />
    </FormControl>
  )
}

export const CustomCurrencyInput: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    currency(e)
  }, [])

  return (
    <FormControl>
      <FormLabel>{props.title}</FormLabel>
      <Input variant="outline" prefix="R$" placeholder="0,00" onKeyUp={handleKeyUp} />
    </FormControl>
  )
}
