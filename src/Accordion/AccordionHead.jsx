import React from 'react'
import { Context } from './Accordion'
import classnames from 'classnames'

const AccordionHead = ({ children, index }) => {
  const { toggle, on } = React.useContext(Context)

  return (
    <button
      className={classnames('accordion-head', { on: on[index] })}
      onClick={() => {
        toggle(index)
      }}
    >
      {children}
    </button>
  )
}

export default AccordionHead
