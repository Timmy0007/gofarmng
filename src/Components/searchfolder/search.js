import { useState } from "react"
import React from 'react'

export const search = () =>{
    const [searchInput, setSearchInput] = useState("");
    const searchChange = (event) =>{
        setSearchInput(event.target.value);
    }
    const searchClick = () =>{

    }
  return (
    <div>
    <input className='srch' onChange={searchChange} value={searchInput} type="search"placeholder="  Search Products..."/>
     <button type='submit' onClick={}><i class="fa fa-search"></i></button>
    </div>

)

}

