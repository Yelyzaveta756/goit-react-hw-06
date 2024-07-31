import { useId } from 'react'
import { useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/filtersSlice'
import css from './SearchBox.module.css'

export default function SearchBox(){

    const inputId = useId()
    const dispatch = useDispatch()

    const handleFilter = (e) => dispatch(changeFilter(e.target.value))
    
    return (
        <div>
            <p className={css.findTitle}>Find contacts by name</p>
            <input type="text"  id={inputId} onChange={handleFilter} className={css.searchInput}/>
        </div>
    )
}