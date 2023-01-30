
interface InvoiceData {
    invoice_number: string;
    total: number;
    currency: "USD" | "EUR";
    invoice_date: Date;
    due_date: Date;
    vendor_name: string;
    remittance_address: string;
}

export type { InvoiceData };
