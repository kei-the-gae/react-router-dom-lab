import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import MailboxForm from './components/MailboxForm';
import MailboxList from './components/MailboxList';
import MailboxDetails from './components/MailboxDetails';

const App = () => {
  const [mailboxes, setMailboxes] = useState([]);

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
    console.log(newMailboxData);
    console.log(mailboxes);
  };

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<main><h1>Post Office</h1></main>} />
        <Route path='/mailboxes' element={<MailboxList />} />
        <Route path='/new-mailbox' element={<MailboxForm addMailbox={addMailbox} />} />
        <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />} />
        <Route path='*' element={<h2>Whoops, nothing here!</h2>} />
      </Routes>
    </>
  );
};

export default App;