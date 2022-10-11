import { styled } from './styles'
import { ComponentProps } from 'react'

export const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite300',
  border: 0,

  variants: {
    size: {
      small: {
        padding: '$2 $4',
        fontSize: 14
      },
      big: {
        padding: '$3 $6',
        fontSize: 16
      }
    }
  },

  defaultVariants: {
    size: 'small'
  }
})

export type ButtonProps = ComponentProps<typeof Button>