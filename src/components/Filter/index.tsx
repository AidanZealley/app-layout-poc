import { FilterOption } from './FilterOption'
import styles from './styles.module.css'

interface IProps {
  name?: string
  active?: boolean
  children: React.ReactNode
}

export const Filter = ({ name, active, children }: IProps) => {
  return (
    <div
      className={`
        ${styles.filter}
        ${active && ` ${styles.active}`}
      `}
    >
      {name && <h4 className={styles.name}>{name}</h4>}

      <div className={styles.options}>
        {children}
      </div>
    </div>
  )
}

Filter.Option = FilterOption