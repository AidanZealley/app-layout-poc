import { Search } from 'react-feather'
import { Button } from '../Button'
import styles from './styles.module.css'

interface IProps {
  placeholder?: string
}

export const SearchInput = ({ placeholder }: IProps) => {
  return (
    <div className={styles.search}>
      <input className={styles.input} placeholder={placeholder}/>
      <Button variant="borderless">
        <Search size="1rem"/>
      </Button>
    </div>
  )
}