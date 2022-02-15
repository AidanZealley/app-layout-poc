import styles from './styles.module.css'

export const Filter = () => {
  return (
    <div className={styles.filter}>
      <h4 className={styles.name}>Filter Name</h4>

      <div className={styles.options}>
        <div className={styles.option}>
          <input name="option-1" type="checkbox" checked/>
          <label label-for="option-1">Option 1</label>
        </div>

        <div className={styles.option}>
          <input name="option-2" type="checkbox"/>
          <label label-for="option-2">Option 2</label>
        </div>

        <div className={styles.option}>
          <input name="option-3" type="checkbox"/>
          <label label-for="option-3">Option 3</label>
        </div>
      </div>
    </div>
  )
}