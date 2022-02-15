import { Menu } from 'react-feather'
import { Button } from '../Button'
import styles from './styles.module.css'

interface IProps {
  title: string
  reverse?: boolean
  menuHandler: () => void
  children?: React.ReactNode
}

export const Header = ({ title, reverse, menuHandler, children }: IProps) => {
  return (
    <div className={`${styles.header}${reverse ? ` ${styles.reverse}` : ''}`}>
      <span className={styles.menuBtn}>
        <Button onClick={menuHandler}><Menu size="1rem"/></Button>
      </span>

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.details}>
        {children}
      </div>
    </div>
  )
}