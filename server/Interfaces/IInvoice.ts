
export interface IInvoice {
    id: string,
    invoice_number: string;
    total: number;
    currency: "USD" | "EUR" | "GBP" | "PEN";
    invoice_date: Date;
    due_date: Date;
    vendor_name: string;
    remittance_address: string;
    status: "pending" | "approved" | "rejected";
}


