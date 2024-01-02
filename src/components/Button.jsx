import React from 'react'

export default function Button({ children, onClick, className }) {
  return (
    <button className={`${className} font-bold bg-cyan text-lg text-white`}onClick={onClick}>
      {children}
    </button>
  )
}
