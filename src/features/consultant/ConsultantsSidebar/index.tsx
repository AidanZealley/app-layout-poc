import { Circle } from 'react-feather'
import { Button } from '../../../components/Button'
import { Filter } from '../../../components/Filter'
import { useLayoutValuesContext } from '../../../components/Layout/LayoutProvider'
import { SearchInput } from '../../../components/SearchInput'
import { Sidebar } from '../../../components/Sidebar'

export const ConsultantsSidebar = () => {
  const { showLeft } = useLayoutValuesContext()

  return (
    <Sidebar toggle={showLeft}>
      <Filter name="Search by name">
        <SearchInput placeholder="Enter name..."/>
      </Filter>

      <Filter name="Status" active={true}>
        <Button><Circle size="1rem" color="red"/>Available</Button>
        <Button><Circle size="1rem" color="orange"/>Possible</Button>
        <Button><Circle size="1rem" color="green"/>Firm</Button>
        <Button disabled><Circle size="1rem" color="lightgrey"/>On Project</Button>
      </Filter>

      <Filter name="Office" active={true}>
        <SearchInput placeholder="Enter office..."/>
        <Filter.Option name="Bristol"/>
      </Filter>

      <Filter name="Practice">
        <SearchInput placeholder="Enter practice..."/>
      </Filter>

      <Filter name="Grade" active={true}>
        <SearchInput placeholder="Enter grade..."/>
        <Filter.Option name="Senior"/>
        <Filter.Option name="Junior"/>
      </Filter>
    </Sidebar>
  )
}