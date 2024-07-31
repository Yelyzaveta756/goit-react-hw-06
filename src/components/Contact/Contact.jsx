import css from "./Contact.module.css"

  export default function Contact({data: {id, name, number}, onDelete}){
    return (
        <div className={css.container}>
          <div className={css.itemContainer}> 
            <p className={css.name}>{name}</p>
            <p className={css.number}>{number}</p>
          </div>
            <button className={css.deleteBtn} onClick={()=> onDelete(id)}>Delete</button>
        </div>
    )
  }


  