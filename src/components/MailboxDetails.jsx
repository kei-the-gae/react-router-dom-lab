import { useParams } from 'react-router-dom';

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams();
    const mailbox = mailboxes.find(mailbox => mailbox._id === Number(mailboxId));

    return (
        <main>
            <h1>Mailbox {mailbox._id}</h1>
            <h2>Details</h2>
            <p>Boxholder: {mailbox.boxholder}</p>
            <p>Box size: {mailbox.boxSize}</p>
        </main>
    );
};

export default MailboxDetails;