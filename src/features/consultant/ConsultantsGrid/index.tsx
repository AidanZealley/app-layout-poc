import { useEffect, useState } from 'react';
import { TableRow } from 'react-data-table-component';
import { Grid } from '../../../components/Grid';
import { Loading } from '../../../components/Loading';

const columns = [
    {
        name: 'Name',
        selector: (row: TableRow) => row.name,
    },
    {
        name: 'Office',
        selector: (row: TableRow) => row.office,
    },
];

const data = [
    {
        id: 1,
        name: 'Beetlejuice',
        office: '1988',
    },
    {
        id: 2,
        name: 'Ghostbusters',
        office: '1984',
    },
]

export const ConsultantsGrid = () => {
  const [consultants, setConsultants] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)

      const response = await fetch('https://randomuser.me/api/?results=50')
      const data = await response.json()

      setLoading(false)
      setConsultants(data.results.map((user: any, index: number) => ({
        id: index,
        name: `${user.name.first} ${user.name.last}`,
        office: user.location.city,
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
        data={consultants}
      />
    )
  );
};