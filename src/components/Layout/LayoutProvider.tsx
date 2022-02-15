import { createContext, useCallback, useContext, useMemo, useState } from 'react'

interface IProps {
  children: React.ReactNode
}

interface ILayoutValuesContext {
  showLeft: boolean
  showRight: boolean
}

interface ILayoutActionsContext {
  toggleLeft: () => void
  toggleRight: () => void
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
  const [showLeft, setShowLeft] = useState<boolean>(true)
  const [showRight, setShowRight] = useState<boolean>(true)

  const toggleLeft = useCallback(() => {
    setShowLeft(!showLeft)
  }, [showLeft])

  const toggleRight = useCallback(() => {
    setShowRight(!showRight)
  }, [showRight])

  const valuesContextValue = useMemo(() => ({
    showLeft,
    showRight,
  }), [
    showLeft,
    showRight,
  ])

  const actionsContextValue = useMemo(() => ({
    toggleLeft,
    toggleRight,
  }), [
    toggleLeft,
    toggleRight,
  ])
  
  return (
    <LayoutValuesContext.Provider value={valuesContextValue}>
      <LayoutActionsContext.Provider value={actionsContextValue}>
        {children}
      </LayoutActionsContext.Provider>
    </LayoutValuesContext.Provider>
  )
}