import React from 'react'

export default function Button({ children, onClick, className }) {
  return (
    <button className={`${className} font-bold bg-cyan text-white rounded-full`}onClick={onClick}>
      {children}
    </button>
  )
}
