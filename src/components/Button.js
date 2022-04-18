import React from 'react'

function Button({ className, value, key }) {
  return (
    <button key={key} value={value} className={className}>
      {value}
    </button>
  )
}

export default Button
