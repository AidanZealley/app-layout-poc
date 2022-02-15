import { animated, useSpring } from 'react-spring'
import { SidebarGroup } from './SidebarGroup'
import { SidebarHeader } from './SidebarHeader'
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
        {children}
      </animated.div>
    </animated.div>
  )
}

Sidebar.Header = SidebarHeader
Sidebar.Group = SidebarGroup