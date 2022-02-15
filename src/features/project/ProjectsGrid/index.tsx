import { useEffect, useState } from 'react'
import { TableRow } from 'react-data-table-component'
import { Grid } from '../../../components/Grid'
import { Loading } from '../../../components/Loading'

const columns = [
  {
    name: 'Client',
    selector: (row: TableRow) => row.client,
  },
  {
    name: 'Project',
    selector: (row: TableRow) => row.project,
  },
]

export const ProjectsGrid = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const response = await fetch('https://random-data-api.com/api/company/random_company?size=50')
      const data = await response.json()

      setLoading(false)
      setProjects(data.map((company: any) => ({
        id: company.id,
        client: company.business_name,
        project: company.industry,
      })))
    }

    fetchData()
  }, [])
  
  return (
    loading ? (
      <Loading/>
    ) : (
      <Grid
        columns={columns}
        data={projects}
      />
    )
  )
}