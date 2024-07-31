import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contactsSlice"
import css from "./Contact.module.css"

  export default function Contact({contact: {id, name, number}}){

    const dispatch = useDispatch()

    const handleDeleteContact = () => dispatch(deleteContact(id))

    return (
        <div className={css.container}>
          <div className={css.itemContainer}> 
            <p className={css.name}>{name}</p>
            <p className={css.number}>{number}</p>
          </div>
            <button className={css.deleteBtn} onClick={handleDeleteContact}>Delete</button>
        </div>
    )
  }


  