import React from 'react'
import { useEffect, useRef } from 'react';

const { tableau } = window;

function Tableau() {
  const ref = useRef(null);
  const url = 'https://public.tableau.com/views/Covid-Quick-Analysis/Covid2020overview'

  const initViz = () => {
    new tableau.Viz(ref.current, url, {
      width: "100%",
      height: "100vh"
    })
  }

  useEffect(initViz, [])

  return (
    <div className="tableau-viz" ref={ref}/>
      
  )
}

export default Tableau
