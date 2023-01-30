import { Form, useLoaderData } from "react-router-dom";
import { InvoiceData } from "../interfaces/InvoiceData";



export default function CreateInvoice() {

    /*
    invoice_number: string;
    total: number;
    currency: "USD" | "EUR";
    invoice_date: Date;
    due_date: Date;
    vendor_name: string;
    remittance_address: string;
    */

    return (
        <Form method="post" id="contact-form">
            <label>
                <span>Invoice Number</span>
                <input
                    placeholder="Invoice Number"
                    aria-label="Invoice Number"
                    type="text"
                    name="invoice_number"

                />
            </label>
            <label>
                <span>Total</span>
                <input
                    placeholder="Total"
                    aria-label="Invoice Number"
                    type="text"
                    name="total"

                />
            </label>
            <label>
                <span>Currency</span>
                <input
                    type="text"
                    name="currency"
                    placeholder="USD"

                />
            </label>
            <label>
                <span>Invoice Date</span>
                <input

                    aria-label="Invoice Date"
                    type="date"
                    name="invoice_date"
                />
            </label>
            <label>
                <span>Due Date</span>
                <input

                    aria-label="Due Date"
                    type="date"
                    name="due_date"
                />
            </label>
            <label>
                <span>Remittance Address</span>
                <input

                    aria-label="Remittance Address"
                    type="text"
                    name="remittance_address"
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button type="button">Cancel</button>
            </p>
        </Form>
    );
}