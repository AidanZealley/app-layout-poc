import { HTMLAttributes } from 'react'
import styles from './styles.module.css'

type Sizes = 'sm' | 'md'
type Variants = 'borderless' | 'regular'

interface IProps extends HTMLAttributes<HTMLButtonElement>{
  size?: Sizes
  variant?: Variants
  children: React.ReactNode
  [prop: string]: any
}

export const Button = ({ size = 'md', variant = 'regular', children, ...props }: IProps) => {
  return (
    <button
      className={`
        ${styles.button}
        ${size ? ` ${styles[`size-${size}`]}` : ''}
        ${variant ? ` ${styles[`variant-${variant}`]}` : ''}
      `}
      {...props}
    >
      {children}
    </button>
  )
}