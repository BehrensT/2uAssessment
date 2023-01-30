import { Outlet, Link, useLoaderData, Form, } from "react-router-dom";
import { getContacts, createContact } from "../Pages/invoice";

export async function loader() {
    const contacts = await getContacts();
    return { contacts };
}

export async function action() {
    const contact = await createContact();
    return { contact };
}

export default function Root() {

    const { contacts } = useLoaderData();

    return (
        <>
            <div id="sidebar">
                <nav>
                    <ul>
                        <li>
                            <Link to={`invoice`}>Accounting</Link>
                        </li>
                        <li>
                            <Link to={`invoice/create`}>New Invoice</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="detail"><Outlet /></div>
        </>
    );
}


/*
{contacts.length ? (
    <ul>
        {contacts.map((contact) => (
        <li key={contact.id}>
            <Link to={`contacts/${contact.id}`}>
            {contact.first || contact.last ? (
                <>
                {contact.first} {contact.last}
                </>
            ) : (
                <i>No Name</i>
            )}{" "}
            {contact.favorite && <span>★</span>}
            </Link>
        </li>
        ))}
    </ul>
    ) : (
    <p>
        <i>No contacts</i>
    </p>
)}
*/