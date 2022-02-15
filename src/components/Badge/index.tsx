import styles from './styles.module.css'

interface IProps {
  children: React.ReactNode
}

export const Badge = ({ children }: IProps) => {
  return (
    <div className={styles.badge}>
      {children}
    </div>
  )
}