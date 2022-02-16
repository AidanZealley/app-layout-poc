import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useLocalStorage } from '../../hooks/use-local-storage'

interface IProps {
  children: React.ReactNode
}

interface ILayoutValuesContext {
  showLeft: boolean
  showRight: boolean
  split: number[]
}

interface ILayoutActionsContext {
  toggleLeft: () => void
  toggleRight: () => void
  updateSplit: (width: number) => void
}

const LayoutValuesContext = createContext<ILayoutValuesContext | undefined>(undefined)
const LayoutActionsContext = createContext<ILayoutActionsContext | undefined>(undefined)

export const useLayoutValuesContext = () => {
  const context = useContext(LayoutValuesContext)

  if (!context) {
    throw Error('Using component outside of LayoutValuesContext.')
  }

  return context
}

export const useLayoutActionsContext = () => {
  const context = useContext(LayoutActionsContext)

  if (!context) {
    throw Error('Using component outside of LayoutActionsContext.')
  }

  return context
}

export const LayoutProvider = ({ children }: IProps) => {
  const [layoutData, storeLayoutData] = useLocalStorage('salesforce-resourcer-layout', {
    localShowLeft: true,
    localShowRight: true,
    localSplit: [50, 50]
  });
  
  const { localShowLeft, localShowRight, localSplit } = layoutData
  const [showLeft, setShowLeft] = useState<boolean>(localShowLeft)
  const [showRight, setShowRight] = useState<boolean>(localShowRight)
  const [split, setSplit] = useState<number[]>(localSplit)

  const toggleLeft = useCallback(() => {
    setShowLeft(prevLeft => {
      storeLayoutData({
        ...layoutData,
        localShowLeft: !prevLeft,
      })
      return !prevLeft
    })
  }, [showLeft, layoutData, storeLayoutData])

  const toggleRight = useCallback(() => {
    setShowRight(prevRight => {
      storeLayoutData({
        ...layoutData,
        localShowRight: !prevRight,
      })
      return !prevRight
    })
  }, [showRight, layoutData, storeLayoutData])

  const updateSplit = useCallback((secondaryWidth) => {
    const secondary = Math.floor(secondaryWidth)
    const primary = 100 - secondary

    setSplit([primary, secondary])
    storeLayoutData({
      ...layoutData,
      localSplit: [primary, secondary],
    })
  }, [layoutData, storeLayoutData])

  const valuesContextValue = useMemo(() => ({
    showLeft,
    showRight,
    split,
  }), [
    showLeft,
    showRight,
    split,
  ])

  const actionsContextValue = useMemo(() => ({
    toggleLeft,
    toggleRight,
    updateSplit,
  }), [
    toggleLeft,
    toggleRight,
    updateSplit,
  ])
  
  return (
    <LayoutValuesContext.Provider value={valuesContextValue}>
      <LayoutActionsContext.Provider value={actionsContextValue}>
        {children}
      </LayoutActionsContext.Provider>
    </LayoutValuesContext.Provider>
  )
}