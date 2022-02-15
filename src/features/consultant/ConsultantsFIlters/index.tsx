import { Filter } from '../../../components/Filter'
import { SearchInput } from '../../../components/SearchInput'

export const ConsultantsFilters = () => {
  return (
    <>
      <SearchInput placeholder="Consultant name..."/>

      <Filter name="Status" active={true}>
        <Filter.Option name="Available" checked={true}/>
        <Filter.Option name="Possible" checked={true}/>
        <Filter.Option name="Firm" checked={true}/>
        <Filter.Option name="OnProject" checked={false}/>
      </Filter>

      <Filter name="Office" active={true}>
        <Filter.Option name="Bristol" checked={true}/>
        <Filter.Option name="Edinburgh" checked={false}/>
        <Filter.Option name="Glasgow" checked={false}/>
        <Filter.Option name="Leeds" checked={false}/>
        <Filter.Option name="London" checked={false}/>
        <Filter.Option name="Newcastle" checked={false}/>
      </Filter>

      <Filter name="Practice" active={true}>
        <Filter.Option name="Delivery" checked={false}/>
        <Filter.Option name="Development" checked={true}/>
        <Filter.Option name="Testing" checked={false}/>
        <Filter.Option name="UX" checked={false}/>
      </Filter>

      <Filter name="Grade">
        <Filter.Option name="Principle" checked={false}/>
        <Filter.Option name="Lead" checked={false}/>
        <Filter.Option name="Senior" checked={false}/>
        <Filter.Option name="Standard" checked={false}/>
        <Filter.Option name="Junior" checked={false}/>
      </Filter>
    </>
  )
}