import SplitterLayout from 'react-splitter-layout'
import { ConsultantsHeader } from '../../features/consultant/ConsultantsHeader'
import { ProjectsHeader } from '../../features/project/ProjectsHeader'
import { Sidebar } from '../Sidebar'
import { useLayoutValuesContext } from './LayoutProvider'
import styles from './styles.module.css'
import '../../styles/splitter.css';
import { ConsultantsFilters } from '../../features/consultant/ConsultantsFIlters'
import { ProjectsFilters } from '../../features/project/ProjectsFIlters'
import { ProjectsGrid } from '../../features/project/ProjectsGrid'
import { Pane } from '../Pane'
import { ConsultantsGrid } from '../../features/consultant/ConsultantsGrid'

export const Layout = () => {
  const { showLeft, showRight } = useLayoutValuesContext()

  return (
    <div className={styles.layout}>
      <div className={styles.side}>
        <Sidebar toggle={showLeft}>
          <ConsultantsFilters/>
        </Sidebar>
      </div>

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

      <div className={styles.side}>
        <Sidebar toggle={showRight}>
          <ProjectsFilters/>
        </Sidebar>
      </div>
    </div>
  )
}