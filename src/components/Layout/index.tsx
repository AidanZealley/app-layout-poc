import { ConsultantsSidebar } from '../../features/consultant/ConsultantsSidebar'
import { ProjectsSidebar } from '../../features/project/ProjectsSidebar'
import { Splitter } from '../Splitter'
import { Pane } from '../Pane';
import { ConsultantsHeader } from '../../features/consultant/ConsultantsHeader';
import { ConsultantsGrid } from '../../features/consultant/ConsultantsGrid';
import { ProjectsHeader } from '../../features/project/ProjectsHeader';
import { ProjectsGrid } from '../../features/project/ProjectsGrid';
import styles from './styles.module.css'

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <ConsultantsSidebar/>

      <div className={styles.content}>
        <Splitter>
          <Pane>
            <ConsultantsHeader/>
            <ConsultantsGrid/>
          </Pane>
          <Pane>
            <ProjectsHeader/>
            <ProjectsGrid/>
          </Pane>
        </Splitter>
      </div>

      <ProjectsSidebar/>
    </div>
  )
}