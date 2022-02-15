import { useLayoutValuesContext } from "../../../components/Layout/LayoutProvider"
import { Sidebar } from "../../../components/Sidebar"
import { ProjectsFilters } from "../ProjectsFilters"

export const ProjectsSidebar = () => {
  const { showRight } = useLayoutValuesContext()

  return (
    <Sidebar toggle={showRight}>
      <Sidebar.Header totalFilters={1} activeFilters={0}/>

      <Sidebar.Group>
        <ProjectsFilters/>
      </Sidebar.Group>
    </Sidebar>
  )
}