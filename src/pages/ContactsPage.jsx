
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import { fetchContacts } from "../redux/contacts/operations";
import { selectLoading } from "../redux/contacts/selectors";
import Loading from "../components/Loading/Loading";
import SearchBox from "../components/SearchBox/SearchBox";
import { selectError } from "../redux/contacts/selectors";

export default function Contacts() {
  const error = useSelector(selectError)
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Your Contacts</h1>
      <ContactForm />
      <SearchBox/>
      <div>{isLoading && <Loading/>}</div>
      <ContactList />
      {error && alert("Whooops, something went wrong, plese try again or reload the page!")}
    </>
  );
}
