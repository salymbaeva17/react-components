import React, {useState} from 'react';
import users from "./users";

const Contacts = () => {
    const [contacts, setContacts] = useState(users)
    return (
        <div className="row">{
            contacts.map(el =>
                <div key={el.id} className="col-4 contact__box">
                    <h2 className="contact__name">{el.name}</h2>
                    <span className="contact__phone">{el.phone}</span>
                    <p className="contact__email">{el.email}</p>
                    <div className="contact__address">
                        <p className="contact__city">{el.address.street}</p>
                    </div>
                </div>

            )}
        </div>

    );
};

export default Contacts;