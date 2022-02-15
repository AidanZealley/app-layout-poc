import styles from './styles.module.css'

interface IProps {
  children: React.ReactNode
  [prop: string]: any
}

export const Button = ({ children, ...props }: IProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  )
}