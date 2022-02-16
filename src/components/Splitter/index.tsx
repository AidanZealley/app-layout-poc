import { useState } from 'react'
import SplitterLayout from 'react-splitter-layout'
import { useLayoutActionsContext, useLayoutValuesContext } from '../Layout/LayoutProvider'
import './splitter.css';

interface IProps {
  children: React.ReactNode
}

export const Splitter = ({ children }: IProps) => {
  const { split } = useLayoutValuesContext()
  const { updateSplit } = useLayoutActionsContext()
  const [secondaryWidth, setSecondaryWidth] = useState(50)

  const handleSecondaryChange = (width: number) => {
    setSecondaryWidth(width)
  }

  const dragEndHandler = () => {
    updateSplit(secondaryWidth)
  }

  return (
    <SplitterLayout
      percentage
      primaryMinSize={10}
      secondaryMinSize={10}
      secondaryInitialSize={split[1]}
      onDragEnd={dragEndHandler}
      onSecondaryPaneSizeChange={handleSecondaryChange}
    >
      {children}
    </SplitterLayout>
  )
}