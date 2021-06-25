import React from 'react';

const ContactCard = () => {
    return (
        <div className="ContactCard">
            <ul className='list-group'>
                <li className='list-group-item'>
                    <h5>
                        <a href='mailto:sttepstutoring@yahoo.com'>Send E-mail</a>
                    </h5>
                </li>
                <li className='list-group-item'>
                    <h5>
                        By Phone: (253) 820-1032
                    </h5>
                </li>
                <li className='list-group-item'>
                    <h5>
                        <a href='https://github.com/cmcunningham27' target='_blank' rel='noreferrer'>GitHub</a>
                    </h5>
                </li>
                <li className='list-group-item'>
                    <h5>
                        <a href='https://www.linkedin.com/in/cassandra-cunningham-a29347141' target='_blank' rel='noreferrer'>LinkedIn</a>
                    </h5>
                </li>
            </ul>
        </div>
    )
};

export default ContactCard;