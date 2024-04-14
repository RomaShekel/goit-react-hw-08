import { IoPersonSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "../Contact/Contact.module.css"

export default function Contact({contact}) {
    const dispatch = useDispatch()
    return(
        <div  className={css.contact}>
            <div  className={css.contactInfo}>
            <p><IoPersonSharp /> {contact.name}</p>
            <p><FaPhoneAlt /> {contact.number}</p>
            </div>
            <button type="button" className={css.button} onClick={() => dispatch(deleteContact(contact.id))}><MdDelete /> Delete</button>
        </div>
    )
}