import { List } from 'react-feather'
import { Badge } from '../Badge'
import { Button } from '../Button'
import styles from './styles.module.css'

interface IProps {
  title: string
  activeFilters?: number
  reverse?: boolean
  menuHandler: () => void
  children?: React.ReactNode
}

export const Header = ({
  title,
  activeFilters,
  reverse,
  menuHandler,
  children
}: IProps) => {
  return (
    <div
      className={`
        ${styles.header} 
        ${reverse && ` ${styles.reverse}`}
      `}
    >
      <span className={styles.menuBtn}>
        {activeFilters &&
          <div className={styles.badgeWrap}>
            <Badge>{activeFilters}</Badge>
          </div>
        }
        <Button onClick={menuHandler}><List size="1rem"/></Button>
      </span>

      <h2 className={styles.title}>{title}</h2>

      <div className={styles.details}>
        {children}
      </div>
    </div>
  )
}