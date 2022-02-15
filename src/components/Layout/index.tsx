import SplitterLayout from 'react-splitter-layout'
import { ConsultantsHeader } from '../../features/consultant/ConsultantsHeader'
import { ProjectsHeader } from '../../features/project/ProjectsHeader'
import { ProjectsGrid } from '../../features/project/ProjectsGrid'
import { Pane } from '../Pane'
import { ConsultantsGrid } from '../../features/consultant/ConsultantsGrid'
import { ConsultantsSidebar } from '../../features/consultant/ConsultantsSidebar'
import { ProjectsSidebar } from '../../features/project/ProjectsSidebar'
import styles from './styles.module.css'
import '../../styles/splitter.css';

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <ConsultantsSidebar/>

      <div className={styles.content}>
        <SplitterLayout percentage primaryMinSize={10} secondaryMinSize={10}>
          <Pane>
            <ConsultantsHeader/>
            <ConsultantsGrid/>
          </Pane>
          <Pane>
            <ProjectsHeader/>
            <ProjectsGrid/>
          </Pane>
        </SplitterLayout>
      </div>

      <ProjectsSidebar/>
    </div>
  )
}