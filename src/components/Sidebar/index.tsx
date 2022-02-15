import { animated, useSpring } from 'react-spring'
import styles from './styles.module.css'

interface IProps {
  toggle: boolean
  children?: React.ReactNode
}

export const Sidebar = ({ toggle, children }: IProps) => {
  const outerStyles = useSpring({
    width: toggle ? '15rem' : '0rem',
  })

  const innertyles = useSpring({
    transform: toggle ? 'translateX(0rem)' : 'translateX(-9rem)',
  })

  return (
    <animated.div className={styles.sidebar} style={outerStyles}>
      <animated.div className={styles.inner} style={innertyles}>
        <div className={styles.wrap}>
          {children}
        </div>
      </animated.div>
    </animated.div>
  )
}