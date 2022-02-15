import { Filter } from "../../../components/Filter"
import { useLayoutValuesContext } from "../../../components/Layout/LayoutProvider"
import { SearchInput } from "../../../components/SearchInput"
import { Sidebar } from "../../../components/Sidebar"

export const ProjectsSidebar = () => {
  const { showRight } = useLayoutValuesContext()

  return (
    <Sidebar toggle={showRight}>
      <Filter name="Search by name">
        <SearchInput placeholder="Enter client..."/>
      </Filter>
    </Sidebar>
  )
}