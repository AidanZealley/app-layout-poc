import styles from './styles.module.css'

interface IProps {
  children: React.ReactNode
}

export const StickyHeader = ({ children }: IProps) => {
  return (
    <div className={styles.header}>
      {children}
    </div>
  )
}