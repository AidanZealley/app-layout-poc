import styles from './styles.module.css'

interface IProps {
  name: string
  checked: boolean
}

export const FilterOption = ({ name, checked }: IProps) => {
  return (
    <div className={styles.option}>
      <input name={name} type="checkbox" checked={checked}/>
      <label className={styles.label} label-for={name}>{name}</label>
    </div>
  )
}