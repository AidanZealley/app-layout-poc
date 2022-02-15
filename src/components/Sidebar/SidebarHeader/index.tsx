import { StickyHeader } from '../../StickyHeader'
import styles from './styles.module.css'

interface IProps {
  totalFilters: number
  activeFilters: number
}

export const SidebarHeader = ({ totalFilters, activeFilters }: IProps) => {
  return (
    <StickyHeader>
      <div className={styles.header}>
        <p>{activeFilters}/{totalFilters} filters active</p>
      </div>
    </StickyHeader>
  )
}