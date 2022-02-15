import { Filter } from '../../../components/Filter'
import { SearchInput } from '../../../components/SearchInput'
import styles from './styles.module.css'

export const ProjectsFilters = () => {
  return (
    <>
      <SearchInput placeholder="Client name..."/>
      <Filter/>
      <Filter/>
      <Filter/>
      <Filter/>
      <Filter/>
    </>
  )
}