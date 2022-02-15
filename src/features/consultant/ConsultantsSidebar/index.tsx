import { useLayoutValuesContext } from "../../../components/Layout/LayoutProvider"
import { Sidebar } from "../../../components/Sidebar"
import { ConsultantsFilters } from "../ConsultantsFilters"

export const ConsultantsSidebar = () => {
  const { showLeft } = useLayoutValuesContext()

  return (
    <Sidebar toggle={showLeft}>
      <Sidebar.Header totalFilters={5} activeFilters={3}/>
      
      <Sidebar.Group>
        <ConsultantsFilters/>
      </Sidebar.Group>
    </Sidebar>
  )
}