import React, { cloneElement } from 'react'

let index = -1
const AccordionContent = ({ children }) => {
  index += 1

  return (
    <div className="accordion-content">
      {React.Children.map(children, c => cloneElement(c, { index }))}
    </div>
  )
}

export default AccordionContent
