import { useState } from "react"
import SplitterLayout from "react-splitter-layout"
import { ConsultantsGrid } from "../../features/consultant/ConsultantsGrid"
import { ConsultantsHeader } from "../../features/consultant/ConsultantsHeader"
import { ProjectsGrid } from "../../features/project/ProjectsGrid"
import { ProjectsHeader } from "../../features/project/ProjectsHeader"
import { useLayoutActionsContext, useLayoutValuesContext } from "../Layout/LayoutProvider"
import { Pane } from "../Pane"

export const Splitter = () => {
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
      <Pane>
        <ConsultantsHeader/>
        <ConsultantsGrid/>
      </Pane>
      <Pane>
        <ProjectsHeader/>
        <ProjectsGrid/>
      </Pane>
    </SplitterLayout>
  )
}