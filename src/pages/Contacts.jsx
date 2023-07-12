import { useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { Helmet } from 'react-helmet';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import { fetchContacts } from 'redux/contacts/operations';
// import { selectIsLoading } from 'redux/contacts/selectors';

export default function  ContactsPage(){
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
      }, [dispatch]);

    return(
        <>
        <Helmet>
            <title>Your contacts</title>
        </Helmet>
        <ContactForm/>
        <Filter/>
        <ContactList/>
        </>
    )
}