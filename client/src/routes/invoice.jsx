
import { Form, useLoaderData } from "react-router-dom";
import { getInvoice } from "../Pages/invoice";

export async function loader({ params }) {
    return getInvoice(params.contactId);
}
export default function Invoice() {
    const contact = useLoaderData();

    return (
        <div id="contact">

        </div>
    );
}


