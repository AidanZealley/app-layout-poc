import { useEffect, useState } from 'react'
import { TableRow } from 'react-data-table-component'
import { Grid } from '../../../components/Grid'

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://random-data-api.com/api/company/random_company?size=50')
      const data = await response.json()

      setProjects(data.map((company: any) => ({
        id: company.id,
        client: company.business_name,
        project: company.industry,
      })))
    }

    fetchData()
  }, [])
  
  return (
    <Grid
      columns={columns}
      data={projects}
    />
  )
}