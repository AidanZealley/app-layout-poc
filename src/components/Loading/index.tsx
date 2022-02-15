import { Loader } from 'react-feather'
import styles from './styles.module.css'

export const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}>
        <Loader size="2rem"/>
      </div>
    </div>
  )
}