import Contact from "../Contact/Contact"
import { selectFilteredContacts, selectLoading} from "../../redux/contactsSlice"
import { useSelector } from "react-redux"
import Loading from "../Loading/Loading"

export default function ContactList() {
    const loading = useSelector(selectLoading);
    const visibleContacts = useSelector(selectFilteredContacts)
    return(
        <div>
            {visibleContacts.map(contact => {
                return(
                <Contact key={contact.id} contact={contact}/>)
            })}
            {loading && <Loading />}
        </div>
    )
}