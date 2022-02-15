import styles from './styles.module.css'

interface IProps {
  children?: React.ReactNode
}

export const Pane = ({ children }: IProps) => {
  return (
    <div className={styles.pane}>
      {children}
    </div>
  )
}