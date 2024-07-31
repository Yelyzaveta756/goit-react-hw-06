import { useState } from "react"
import css from './SearchBox.module.css'
export default function SearchBox({search, onSearch}){

    
    return (
        <div>
            <p className={css.findTitle}>Find contacts by name</p>
            <input type="text" value={search} onChange={onSearch} className={css.searchInput}/>
        </div>
    )
}