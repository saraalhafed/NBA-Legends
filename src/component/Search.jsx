import React from 'react'
import "./Search.css"
export default function Search() {
  return (
    <div className='search-container'>
          <input   type="text"  placeholder='Search Player ...'/>
          <div>
          <span>Sort by:</span>
          <select name="" id="">
          {["Points","Rebuands","Asist","All Star"].map((par , i) => (
                      <option key={i} value={par}>
                                   {par}
                          </option>
                         ))}
          </select>
          </div>
          
    </div>
  )
}
