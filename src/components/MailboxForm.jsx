import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const initialState = {
    _id: 0,
    boxSize: 'small',
    boxholder: '',
}

const MailboxForm = ({ addMailbox }) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        addMailbox(formData);
        console.log(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    };

    const handleChange = ({ target }) => setFormData({ ...formData, [target.name]: target.value });

    return (
        <main>
            <h2>New Mailbox</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder">Boxholder: </label>
                <input type="text" name="boxholder" id="boxholder" value={formData.boxholder} onChange={handleChange} />

                <label htmlFor="boxSize">Box size: </label>
                <select name="boxSize" id="boxSize" value={formData.boxSize} onChange={handleChange}>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>

                <button type="submit">Submit</button>
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
