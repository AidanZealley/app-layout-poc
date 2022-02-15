import DataTable from 'react-data-table-component';

interface IProps {
  columns: any
  data: any
}

export const Grid = ({ columns, data }: IProps) => {
  return (
    <DataTable
      columns={columns}
      data={data}
    />
  )
}