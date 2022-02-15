import { Header } from '../../../components/Header'
import { useLayoutActionsContext } from '../../../components/Layout/LayoutProvider'

export const ProjectsHeader = () => {
  const { toggleRight } = useLayoutActionsContext()

  return (
    <Header title="Projects" reverse={true} menuHandler={toggleRight}/>
  )
}