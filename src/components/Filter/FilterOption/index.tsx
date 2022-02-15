import { X } from 'react-feather'
import { Button } from '../../Button'
import styles from './styles.module.css'

interface IProps {
  name: string
}

export const FilterOption = ({ name }: IProps) => {
  return (
    <div className={styles.option}>
      <label className={styles.label} label-for={name}>{name}</label>
      <Button size="sm" color="danger"><X size="0.8rem"/></Button>
    </div>
  )
}