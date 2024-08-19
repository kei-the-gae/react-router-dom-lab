import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = () => {
    const [formData, setFormData] = useState({
        _id: 0,
        boxSize: '',
        boxholder: '',
    });
    const navigate = useNavigate();

    return (
        <main>
            <h2>New Mailbox</h2>
            <form>
                <label htmlFor="boxSize">Box size: </label>
                <select name="boxSize" id="boxSize">
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                </select>

                <label htmlFor="boxholder">Boxholder: </label>
                <input type="text" name="boxholder" id="boxholder" />
            </form>
        </main>
    );
};

export default MailboxForm;

// const mailboxExample = {
//     _id: 1,
//     boxSize: 'Small',
//     boxholder: 'Alex',
//   };
