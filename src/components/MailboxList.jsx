import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
    return (
        <main>
            <h2>Mailbox List</h2>
            <ul>
                {mailboxes.map(mailbox => (
                    <li key={mailbox._id}><Link to={`/mailboxes/${mailbox._id}`}>Mailbox {mailbox._id}</Link></li>
                ))}
            </ul>
        </main>
    );
};

export default MailboxList;