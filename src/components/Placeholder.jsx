import React from 'react'
import './Placeholder.css'

function Placeholder() {
  return (
    <div className="loading__container" >
        <div className="loading-square-2 loading__draw"></div>
        <div className="loading-square-1 loading__draw"></div>
        <div className="loading-square-3 loading__draw"></div>
    </div>
  )
}

export { Placeholder }