import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchOrder () {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  function handleSubmit (e) {
    e.preventDefault()
    if (!query) return
    navigate(`/order/${query}`)
    setQuery('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder='Search Order #'
        value={query}
        onChange={e => setQuery(e.target.value)}
        className='rounded-full px-4 py-2 text-sm bg-yellow-100 
        placeholder:text-stone-900 w-28 sm:w-64 focus:w-72 
        focus:outline-none focus:ring focus:ring-yellow-500 
        focus:ring-opacity-50 transition-all 
        duration-500 sm:focus:w-72'
      />
    </form>
  )
}
