import styles from './styles.module.css'

interface IProps {
  children: React.ReactNode
}

export const SidebarGroup = ({ children }: IProps) => {
  return (
    <div className={styles.group}>
      {children}
    </div>
  )
}