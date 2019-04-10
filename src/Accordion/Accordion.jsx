import React, { useMemo, useCallback, useState, createContext } from 'react'

import AccordionContent from './AccordionContent'
import AccordionHead from './AccordionHead'
import AccordionItem from './AccordionItem'

export const Context = createContext([])

const Accordion = ({ children }) => {
  const initialState = useMemo(() => Array.from(children, () => false), [
    children
  ])
  const [on, setOn] = useState(initialState)
  const toggle = useCallback(index => {
    setOn(oldOn => oldOn.map((on, _index) => (index === _index ? !on : on)))
  }, [])
  const value = useMemo(() => ({ on, toggle }), [on])

  return (
    <Context.Provider value={value}>
      <div className="accordion">{children}</div>
    </Context.Provider>
  )
}

Accordion.Content = AccordionContent
Accordion.Head = AccordionHead
Accordion.Item = AccordionItem

export default Accordion
