import { ConsultantsSidebar } from '../../features/consultant/ConsultantsSidebar'
import { ProjectsSidebar } from '../../features/project/ProjectsSidebar'
import { Splitter } from '../Splitter'
import styles from './styles.module.css'
import '../../styles/splitter.css';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <ConsultantsSidebar/>

      <div className={styles.content}>
        <Splitter/>
      </div>

      <ProjectsSidebar/>
    </div>
  )
}