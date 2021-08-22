import React from 'react';
import './style.css';

const ContactCard = () => {
    return (
        <div className="ContactCard text-light" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5'}}>
            <h5>
                <a href='mailto:cm_cunningham27@yahoo.com'>Send E-mail</a>
            </h5>
            <h5>
                By Phone: (253) 820-1032
            </h5>
            <h5>
                <a href='https://github.com/cmcunningham27' target='_blank' rel='noreferrer'>GitHub</a>
            </h5>
            <h5>
                <a href='https://www.linkedin.com/in/cassandra-cunningham-a29347141' target='_blank' rel='noreferrer'>LinkedIn</a>
            </h5>
        </div>
    )
};

export default ContactCard;