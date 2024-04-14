// src/components/App.jsx
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contactsOps";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectError } from "../../redux/contactsSlice";


export default function App() {
const error = useSelector(selectError)
  const dispatch = useDispatch()
useEffect(() => {
  dispatch(fetchContacts())
}, [dispatch])

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm/>
      <SearchBox/>
      <ContactList/>
      {error && alert("Whooops, something went wrong, plese try again or reload the page!")}
    </div>
  );
}

