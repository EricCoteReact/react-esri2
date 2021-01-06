import React from 'react';
import ContactApi from './contact-api/ContactApi';
import ContactTable from './ContactTable';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Contacts() {
  /** @type {[Contacts, Function]} ContactState - state hook of contacts */
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    refreshData();
    //  if (ContactApi.subscribeChangeNotification) {
    //    ContactApi.subscribeChangeNotification(refreshData)
    //  }

    // return ()=> {ContactApi.unsubscribeChangeNotification()}
  }, []);

  // This is the old way of calling data
  // eslint-disable-next-line 
  function refreshDataPromise() {
    ContactApi.getAllContacts()
      .then((data) => {
        setContacts(data);
      })
      .catch((err) => console.log(err));
  }

  async function refreshData() {
    try {
      let data = await ContactApi.getAllContacts();
      setContacts(data);
    }
    catch (err) {
      console.log(err);
    }
  }

  async function deleteContact(id) {
    await ContactApi.deleteContact(id);
    refreshData();
  }

  return (
    <>
      <h1>Contacts (using Hooks)</h1>
      <ContactTable contacts={contacts} onDelete={deleteContact} />
      <Link to='/data/details'>
        <Button color='primary'>Create Contact</Button>
      </Link>
    </>
  );
}

// to show a spinner while loading:
// { isLoading ? <Spinner /> : <ContactTable /> }
