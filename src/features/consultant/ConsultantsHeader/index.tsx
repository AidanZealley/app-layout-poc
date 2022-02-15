import { Clock, User } from 'react-feather'
import { Header } from '../../../components/Header'
import { useLayoutActionsContext } from '../../../components/Layout/LayoutProvider'
import styles from './styles.module.css'

export const ConsultantsHeader = () => {
  const { toggleLeft } = useLayoutActionsContext()

  return (
    <Header title="Consultants" menuHandler={toggleLeft} activeFilters={3}>
      <div className={styles.quickInfo}>
        <div className={styles.info}>
          <User size="1rem"/>
          <span className={styles.quantity}>32</span>
        </div>

        <div className={styles.info}>
          <Clock size="1rem" color='goldenrod'/>
          <span className={styles.quantity}>18</span>
        </div>
      </div>
    </Header>
  )
}