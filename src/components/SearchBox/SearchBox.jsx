import { useId } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { changeFilter } from '../../redux/filtersSlice'
import { selectNameFilter } from '../../redux/filtersSlice'
import css from './SearchBox.module.css'

export default function SearchBox(){

    const inputId = useId()
    const dispatch = useDispatch()
    const filter = useSelector(selectNameFilter);

    const handleFilter = (e) => dispatch(changeFilter(e.target.value))
    
    return (
        <div>
            <p className={css.findTitle}>Find contacts by name</p>
            <input type="text"  id={inputId} value={filter} onChange={handleFilter} className={css.searchInput}/>
        </div>
    )
}