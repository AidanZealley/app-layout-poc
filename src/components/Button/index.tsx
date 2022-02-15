import { HTMLAttributes } from 'react'
import styles from './styles.module.css'

type Sizes = 'sm' | 'md'
type Variants = 'regular' | 'borderless'
type Colors = 'regular' | 'danger'

interface IProps extends HTMLAttributes<HTMLButtonElement>{
  size?: Sizes
  variant?: Variants
  color?: Colors
  children: React.ReactNode
  [prop: string]: any
}

export const Button = ({ size = 'md', variant = 'regular', color = 'regular', children, ...props }: IProps) => {
  return (
    <button
      className={`
        ${styles.button} 
        ${styles[`size-${size}`]} 
        ${styles[`variant-${variant}`]} 
        ${styles[`color-${color}`]}
      `}
      {...props}
    >
      {children}
    </button>
  )
}